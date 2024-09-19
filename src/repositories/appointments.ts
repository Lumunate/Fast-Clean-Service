// repositories/appointmentRepository.ts

import Car from "../models/Car";
import { Timeslot } from "../models/Timeslot";

class AppointmentRepository {
  // Get available cars for a specific date
  async getAvailableCarsForDate(date) {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0); // Normalize to start of day

    const carInfo = await Car.findOne({ date: targetDate });

    if (carInfo) {
      return carInfo.availableCars;
    } else {
      // If no entry for the specific date, find the most recent entry before the target date
      const previousEntry = await Car.findOne({
        date: { $lt: targetDate },
      }).sort({ date: -1 });

      return previousEntry ? previousEntry.availableCars : 0;
    }
  }

  // Update or create car availability for a specific date
  async updateCarAvailability(date, availableCars) {
    const targetDate = new Date(date);
    targetDate.setHours(0, 0, 0, 0); // Normalize to start of day

    const result = await Car.findOneAndUpdate(
      { date: targetDate },
      { availableCars: availableCars },
      { upsert: true, new: true }
    );

    return result;
  }

  async setAvailableTimeslots(date: string, slots: string[]): Promise<void> {
    await Timeslot.findOneAndUpdate({ date: new Date(date) }, { slots }, { upsert: true });
  }

  async getAvailableTimeslots(date: string): Promise<string[]> {
    const timeslot = await Timeslot.findOne({ date: new Date(date) });
    return timeslot ? timeslot.slots : [];
  }
}

export default new AppointmentRepository();