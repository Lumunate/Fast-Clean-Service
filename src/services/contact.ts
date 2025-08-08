import ContactRepository from "../repositories/contact";
import ContactConfirmationEmail from "../templates/contact";
import {IContact} from "../types/contactForm";
import sendEmail from "./sendEmail";

class ContactService {
  static async submitContactForm(data: IContact): Promise<void> {
    // - Modify the data in some way

    // Check for spam
    if (this.isSpam(data.message)) {
      throw new Error("Spam detected");
    }

    await ContactRepository.createContact(data);

    //! - Send a confirmation email
    await this.sendConfirmationEmail(data);
  }

  private static isSpam(message: string): boolean {
    // Implement spam detection logic
    return false;
  }

  private static async sendConfirmationEmail(data: IContact): Promise<void> {
    await sendEmail(
        {
          to: data.email,
          from: "info@fastcleanservice.nl",
          subject: "Thank you for contacting Fast Clean Service",
        },
        ContactConfirmationEmail,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }
    );
  }
}

export default ContactService;
