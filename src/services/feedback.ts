import { FeedbackRepository } from "../repositories/feedback";
import { IFeedback } from "../types/feedback";

export class FeedbackService {
  private repository: FeedbackRepository;

  constructor() {
    this.repository = new FeedbackRepository();
  }

  async createFeedback(feedbackData: IFeedback) {
    try {
      const feedback = await this.repository.create(feedbackData);
      return feedback;
    } catch (error) {
      throw new Error(`Error in feedback service: ${error.message}`);
    }
  }

  async getAllFeedback() {
    try {
      return await this.repository.findAll();
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }

  async getFeedbackById(id: string) {
    try {
      return await this.repository.findById(id);
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }

  async getFeedbackPaginated(page?: number, limit?: number) {
    try {
      return await this.repository.findWithPagination(page, limit);
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }
}
