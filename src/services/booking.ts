import bookingRepository from "../repositories/booking";
import { IBooking } from "../models/Booking";
import BookingConfirmationEmail from "../templates/booking";
import RescheduledBookingUserEmail from "../templates/reschedule";
import sendEmail from "./sendEmail";
import notificationRepository from "../repositories/Notifications";
import subscriptionPackageService from "./subscription-package";
import AutocarService from "./autocare-package";
import { GoogleCalendar } from "../repositories/google-calendar";

const calendar = new GoogleCalendar("fast-clean-service-website");

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    const { price, duration } = await this.calculatePrice(bookingData);
    // Ensure userId is included in the bookingData
    // if (!bookingData.userId) {
    //   throw new Error("User ID is required.");
    // }

    console.log("PRICE & DURATION", price, duration);
    console.log("TIMESTAMP", bookingData.appointmentTimestamp);

    // Calculate appointment End Timestamp
    bookingData.appointmentEndTimestamp = new Date(new Date(bookingData.appointmentTimestamp).getTime() + duration * 60 * 1000);

    // if (bookingData.type === "Onsite") {
    bookingData.travelDuration = 0;
    // }

    // Calculate lock time for when the booking/vehicle will be locked
    bookingData.lockTime = { start: null, end: null };
    bookingData.lockTime.start = new Date(
      new Date(bookingData.appointmentTimestamp).getTime() - bookingData.travelDuration * 60 * 1000
    );

    console.log(new Date(bookingData.appointmentTimestamp).getTime(), bookingData.travelDuration * 60 * 1000);

    bookingData.lockTime.end = new Date(
      new Date(bookingData.appointmentEndTimestamp).getTime() + bookingData.travelDuration * 60 * 1000
    );

    console.log(bookingData.lockTime);

    const calendarEvent = await calendar.createEvent({
      summary: `Appointment - ${bookingData.serviceName}`,
      description: bookingData.packageName,
      startTime: new Date(bookingData.appointmentTimestamp).toISOString(),
      endTime: new Date(bookingData.appointmentEndTimestamp).toISOString(),
      attendees: [{ email: bookingData.email }, { email: process.env.GOOGLE_CALENDAR_ORGANIZER as string }],
      location: `${bookingData.street}, ${bookingData.city}, ${bookingData.zipCode}`,
    });

    const newBooking = await bookingRepository.create({
      ...bookingData,
      price,
      duration,
      calendarEventId: calendarEvent.id,
    });

    const appointment = new Date(bookingData.appointmentTimestamp);
    await this.sendConfirmationEmail(
      bookingData.email,
      bookingData.firstName,
      bookingData.serviceName,
      appointment.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      appointment.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }),
      `${bookingData.street}, ${bookingData.city}, ${bookingData.zipCode}`,
      price
    );

    return newBooking;
  }

  async editBooking(id: string, bookingData: Partial<IBooking>): Promise<IBooking> {
    const booking = await bookingRepository.findById(id);
    if (!booking) throw new Error("Booking not found");

    Object.entries(bookingData).forEach(([field, value]) => {
      (booking as any)[field] = value;
    });

    return booking.save();
  }

  async getAllBookingsByUserId(userEmail: string): Promise<IBooking[]> {
    return await bookingRepository.findByUserId(userEmail);
  }
  parseHighestDuration(durationStr: string): number {
    // Remove all non-numeric and non-slash characters
    const cleaned = durationStr.replace(/[^\d/]/g, "");

    // Split on slash if exists, otherwise use the single number
    const numbers = cleaned.split("/").map(Number);

    // For strings like "90~120", the split will result in a single string "90120"
    // So we need to handle this case by splitting the string into chunks of 2-3 digits
    if (numbers.length === 1 && cleaned.length > 3) {
      const matches = cleaned.match(/\d{2,3}/g) || [];
      return Math.max(...matches.map(Number));
    }

    return Math.max(...numbers);
  }

  async calculatePrice(bookingData: Partial<IBooking>) {
    const [packages, subscriptionPackages] = await Promise.all([
      AutocarService.getAllServices(),
      subscriptionPackageService.getAllPackages(),
    ]);

    console.log(bookingData);
    // calculate duration as well as price
    let price: number = 0;
    let duration: number = 0;

    let pkg;
    if (bookingData.serviceName === "Subscription Plans") {
      pkg = subscriptionPackages.find((pkg) => pkg.id.toLowerCase() === bookingData.packageName.toLowerCase());
    } else {
      pkg = packages.packages[bookingData?.packageType?.toLowerCase()]?.find((pkg) => pkg?.id === bookingData.packageName);
    } 

    if (!pkg) {
      console.log(packages);
      console.log("Booking Data:", bookingData.packageName, bookingData.serviceName, bookingData.packageType);
      throw new Error("Package not found");
    }

    const carType = bookingData.vehicleType;
    price += pkg.vehicleOptions[carType]?.additionalCost || 0;
    price += pkg.vehicleOptions[carType]?.additionalTime || 0;

    price += parseFloat(pkg.price.replace("€", "").trim());
    duration += this.parseHighestDuration(pkg.duration);

    if (bookingData.serviceName === "Subscription Plans") {
      if (bookingData.serviceAddons.addons?.length > 0) {
         bookingData.serviceAddons.addons.forEach((addon) => {
          const addonPrice = addon.additionalCost;
          // const addonDuration = _addon?.additionalTime;

          if (!addonPrice) throw new Error("Addon not found");
                    const parsedPrice = Number(addonPrice);
          if (!isNaN(parsedPrice)) {
            price += parsedPrice;
          }
          // duration += addonDuration;
        });
      }
    } else {
      if (bookingData.serviceAddons.addons?.length > 0) {
        bookingData.serviceAddons.addons.forEach((addon) => {
          const addonPrice = addon.additionalCost;
          if (!addonPrice) throw new Error("Addon not found");
         const parsedPrice = Number(addonPrice);
        if (!isNaN(parsedPrice)) {
         price += parsedPrice;
}
        });
      }

      // Detailing exists only for autocare and doesn't have extra duration
      if (bookingData.serviceAddons.detailing?.length > 0) {
        bookingData.serviceAddons.detailing.forEach((addon) => {
          const addonPrice = addon?.additionalCost;

          if (!addonPrice) throw new Error("Detailing not found");
          else if (addonPrice === "On Request") return;

          const parsedPrice = Number(addonPrice);
          if (!isNaN(parsedPrice)) {
            price += parsedPrice;
          }
        });
      }
    }

    if (bookingData.travelDistance) {
      let travelCost = 0;
      if (bookingData.travelDistance > 20) {
        travelCost = (bookingData.travelDistance - 20) * 0.5;
      } else if (bookingData.travelDistance > 75) {
        travelCost = bookingData.travelDistance * 0.6;
      }

      price += travelCost;
    }

    return { price, duration };
  }

  async getBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.findById(id);
  }

  async getAllBookings(): Promise<IBooking[]> {
    return await bookingRepository.findAll();
  }

  async updateBooking(id: string, bookingData: Partial<IBooking>): Promise<IBooking | null> {
    return await bookingRepository.update(id, bookingData);
  }

  async rescheduleBooking(id: string, dateTime: Date, userId: string): Promise<IBooking | null> {
    // First get the existing booking to access all its properties
    const booking = await bookingRepository.findById(id);
    if (!booking) {
      throw new Error("Booking not found");
    }

    // Calculate all new time values based on the new dateTime
    const newEndTime = new Date(dateTime.getTime() + booking.duration * 60 * 1000);
    
    // Prepare the update object with all time-related fields
    const updateData: Partial<IBooking> = {
        appointmentTimestamp: dateTime,
        appointmentEndTimestamp: newEndTime,
        lockTime: {
            start: new Date(dateTime.getTime() - (booking.travelDuration || 0) * 60 * 1000),
            end: new Date(newEndTime.getTime() + (booking.travelDuration || 0) * 60 * 1000)
        }
    };

    // Update the booking with all new time values
    const updatedBooking = await bookingRepository.update(id, updateData);
    if (!updatedBooking) {
        throw new Error("Failed to update booking");
    }

    // Update the calendar event with new times
    try {
        await calendar.updateEvent(booking.calendarEventId, {
            startTime: dateTime.toISOString(),
            endTime: newEndTime.toISOString(),
        });
    } catch (error) {
        console.error("Failed to update calendar event:", error);
        // Consider whether to proceed or throw error here
    }

    // Format dates/times for notifications and emails
    const formattedDate = dateTime.toLocaleDateString("en-US", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const formattedTime = dateTime.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    // Create notification
    const notificationMessage = `Your booking on ${formattedDate} at ${formattedTime} has been rescheduled. Please check your email or visit the customer portal for more details.`;
    
    try {
        await notificationRepository.create({
            user: userId,
            message: notificationMessage,
        });
    } catch (error) {
        console.error("Failed to create notification:", error);
    }

    // Send reschedule email
    try {
        await this.sendResceduleEmail(
            booking.email,
            booking.firstName,
            booking.serviceName,
            formattedDate,
            formattedTime,
            `${booking.street}, ${booking.city}, ${booking.zipCode}`
        );
    } catch (error) {
        console.error("Failed to send reschedule email:", error);
    }

    return updatedBooking;
}

  async deleteBooking(id: string): Promise<IBooking | null> {
    return await bookingRepository.delete(id);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private async sendConfirmationEmail(
    email: string,
    name: any,
    packageName: any,
    date: any,
    time: any,
    location: any,
    price: any
  ): Promise<void> {
    sendEmail(
      {
        to: email,
        from: "info@fastcleanservice.nl",
        subject: "Fast Clean Service - Booking Acknowledgement",
      },
      BookingConfirmationEmail,
      {
        name,
        packageName,
        date,
        time,
        location,
        price,
      }
    )
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  private async sendResceduleEmail(
    email: string,
    name: string,
    packageName: string,
    newDate: string,
    newTime: string,
    location: string
  ): Promise<void> {
    sendEmail(
      {
        to: email,
        from: "info@fastcleanservice.nl",
        subject: "Fast Clean Service - Rescheduled Appointment",
      },

      RescheduledBookingUserEmail,
      {
        name,
        packageName,
        newDate,
        newTime,
        location,
      }
    )
      .then(() => {
        console.log("Email sent");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const bookingService = new BookingService();
export default bookingService;
