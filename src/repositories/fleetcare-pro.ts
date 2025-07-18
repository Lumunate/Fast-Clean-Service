import { FleetCarePro } from "../models/fleetcare-pro";
import { IFleetCarePro } from "../types/fleetcare-pro";

class FleetCareProRepository {
  static async getAllFleetCarePro(): Promise<any[]> {
    return await FleetCarePro.find({ $or: [] });
  }

  static async completeFleetCarePro(id: string): Promise<any> {
    return await FleetCarePro.findByIdAndUpdate(id, { isComplete: true });
  }

  static async createFleetCarePro(data: IFleetCarePro): Promise<void> {
    await FleetCarePro.create(data);
  }

  static async deleteFleetCarePro(id: string): Promise<any> {
    const data = await FleetCarePro.findByIdAndDelete(id);
    if (!data) {
      return { error: "No data found" };
    }

    return data;
  }
}

export default FleetCareProRepository;
