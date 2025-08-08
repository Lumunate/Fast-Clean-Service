// services/fleetCareProService.ts
import FleetCareProRepository from "../repositories/fleetcare-pro";
import FleetCareConfirmationEmail from "../templates/fleetcare-pro";
import {IFleetCarePro} from "../types/fleetcare-pro";
import sendEmail from "./sendEmail";

class FleetCareProService {
  static async submitFleetCareProForm(data: IFleetCarePro): Promise<void> {
    await FleetCareProRepository.createFleetCarePro(data);

    await FleetCareProService.sendConfirmationEmail(
      data.name,
      data.businessName,
      data.email,
      data.vehicleType,
      data.address,
      data.fleetSize
    );

    return;
  }

  static async getFleetCareProForms(): Promise<any[]> {
    const data = await FleetCareProRepository.getAllFleetCarePro();

    return data;
  }

  static async deleteFleetCareForm(id: string): Promise<any> {
    const data = await FleetCareProRepository.deleteFleetCarePro(id);

    return data;
  }

  static async completeFleetCareProForm(id: string): Promise<any> {
    const data = await FleetCareProRepository.completeFleetCarePro(id);

    return data;
  }

  static async sendConfirmationEmail(
    name: string,
    bussinessName: string,
    email: string,
    vehicleType: string,
    location: string,
    fleetSize: string
  ): Promise<void> {
    sendEmail(
      {
        to: email, // Change to your recipient
        from: "info@fastcleanservice.nl",
        subject: "Fast Clean Service - Booking Acknowledgement",
      },
      FleetCareConfirmationEmail,
      {
        name,
        bussinessName,
        email,
        vehicleType,
        location,
        fleetSize,
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


export default FleetCareProService;
