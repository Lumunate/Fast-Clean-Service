import { Feedback } from "../models/Feedback";
import { IFeedback } from "../types/feedback";

export class FeedbackRepository {
  async create(feedbackData: IFeedback) {
    try {
      const feedback = new Feedback(feedbackData);
      return await feedback.save();
    } catch (error) {
      throw new Error(`Error creating feedback: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await Feedback.find({}).sort({ createdAt: -1 });
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }

  async findById(id: string) {
    try {
      const feedback = await Feedback.findById(id);
      if (!feedback) {
        throw new Error("Feedback not found");
      }
      return feedback;
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }

  async findWithPagination(page: number = 1, limit: number = 10) {
    try {
      const skip = (page - 1) * limit;
      const [feedback, total] = await Promise.all([
        Feedback.find({}).sort({ createdAt: -1 }).skip(skip).limit(limit),
        Feedback.countDocuments({}),
      ]);

      return {
        feedback,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
          hasMore: skip + limit < total,
        },
      };
    } catch (error) {
      throw new Error(`Error fetching feedback: ${error.message}`);
    }
  }
}
