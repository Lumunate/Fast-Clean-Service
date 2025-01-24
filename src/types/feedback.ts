import { z } from "zod";

export const feedbackSchema = z.object({
    name: z.string().min(1, 'Name is required'),
    lastName: z.string().min(1, 'Last Name is required'),
    Service: z.string().min(1, 'Service is required'),
    Appointment: z.preprocess((val) => {
      if (typeof val === 'string') {
        const date = new Date(val);
  
        return isNaN(date.getTime()) ? null : date;
      }
  
      return val;
    }, z.date().nullable()),
    experience: z.string().min(1, 'Experience rating is required'),
    feedback: z.string().min(1, 'Feedback is required'),
  });
  
  export type IFeedback = z.infer<typeof feedbackSchema>;