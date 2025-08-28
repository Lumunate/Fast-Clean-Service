import { google } from "googleapis";
import { getAuthedClient } from "../lib/googleapis";
import googleTokensRepository from "./google-tokens";

export interface CalendarEvent {
  summary: string;
  description?: string;
  startTime: string;
  endTime: string;
  timeZone?: string;
  attendees?: { email: string }[];
  location?: string;
}

export interface CalendarFilter {
  timeMin?: string;
  timeMax?: string;
  maxResults?: number;
  q?: string;
}

export class GoogleCalendar {
  private calendarId: string;
  private userId: string;

  constructor(userId: string, calendarId: string = "primary") {
    this.userId = userId;
    this.calendarId = calendarId;
  }

  async getCalendarInstance() {
    const client = await getAuthedClient(() => googleTokensRepository.getTokens(this.userId));
    return google.calendar({ version: "v3", auth: client });
  }

  async listEvents(filter: CalendarFilter = {}) {
    const calendar = await this.getCalendarInstance();

    try {
      const response = await calendar.events.list({
        calendarId: this.calendarId,
        timeMin: filter.timeMin || new Date().toISOString(),
        timeMax: filter.timeMax,
        maxResults: filter.maxResults || 10,
        singleEvents: true,
        orderBy: "startTime",
        q: filter.q,
      });

      return response.data.items;
    } catch (error) {
      console.error("Error listing events:", error);
      throw error;
    }
  }

  async getEvent(eventId: string) {
    const calendar = await this.getCalendarInstance();

    try {
      const response = await calendar.events.get({
        calendarId: this.calendarId,
        eventId,
      });

      return response.data;
    } catch (error) {
      console.error("Error getting event:", error);
      throw error;
    }
  }

  async createEvent(event: CalendarEvent) {
    const calendar = await this.getCalendarInstance();

    try {
      const response = await calendar.events.insert({
        calendarId: this.calendarId,
        requestBody: {
          summary: event.summary,
          description: event.description,
          start: {
            dateTime: event.startTime,
            timeZone: event.timeZone,
          },
          end: {
            dateTime: event.endTime,
            timeZone: event.timeZone,
          },
          attendees: event.attendees,
          location: event.location,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error creating event:", error);
      throw error;
    }
  }

  async updateEvent(eventId: string, event: Partial<CalendarEvent>) {
    const calendar = await this.getCalendarInstance();

    try {
      const response = await calendar.events.patch({
        calendarId: this.calendarId,
        eventId,
        requestBody: {
          summary: event.summary,
          description: event.description,
          start: event.startTime
            ? {
                dateTime: event.startTime,
                timeZone: event.timeZone,
              }
            : undefined,
          end: event.endTime
            ? {
                dateTime: event.endTime,
                timeZone: event.timeZone,
              }
            : undefined,
          attendees: event.attendees,
          location: event.location,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Error updating event:", error);
      throw error;
    }
  }

  async deleteEvent(eventId: string) {
    const calendar = await this.getCalendarInstance();

    try {
      await calendar.events.delete({
        calendarId: this.calendarId,
        eventId,
      });

      return true;
    } catch (error) {
      console.error("Error deleting event:", error);
      throw error;
    }
  }
}
