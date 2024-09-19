// services/bookingService.ts
import bookingRepository from "../repositories/booking";
import Booking, { IBooking } from "../models/Booking";
import sgMail from "../lib/sgMail";
import BookingConfirmationEmail from "../templates/booking";
// import { render } from "@react-email/components";
import { render } from "@react-email/render";
import sendEmail from "./sendEmail";
import { packages } from "../app/subscribe/data";

class BookingService {
  async createBooking(bookingData: Partial<IBooking>): Promise<IBooking> {
    await bookingRepository.create(bookingData);

    this.sendConfirmationEmail(
      bookingData.email,
      bookingData.firstName,
      bookingData.serviceName,
      bookingData.appointmentTimestamp.toDateString(),
      bookingData.appointmentTimestamp.toLocaleTimeString(),
      `${bookingData.street}, ${bookingData.city}, ${bookingData.zipCode}`,
      this.calculatePrice(bookingData)
    );
    return;
  }

  calculatePrice(bookingData: Partial<IBooking>) {
    let price: number = 0;
    if (bookingData.serviceName === "Anywhere Autocare") {
      const pkg = packages.find((pkg) => pkg.name === bookingData.packageName);

      if (!pkg) throw new Error("Package not found");

      price += parseFloat(pkg.price.replace("€", "").trim());

      if (bookingData.serviceAddons) {
        bookingData.serviceAddons.forEach((addon) => {
          const addonPrice = pkg.additionalOptions.find((a) => a.option === addon)?.additionalCost;

          if (!addonPrice) throw new Error("Addon not found");
          price += addonPrice;
        });
      }
    }

    return price;
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
        to: email, // Change to your recipient
        from: "fizoneechan@gmail.com", // Change to your verified sender
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
}

export default new BookingService();