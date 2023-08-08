import { Subjects } from "./subjects";
import { EventStatus } from "./types/event-status";

export interface EventUpdatedEvent {
  subject: Subjects.EventUpdated;
  data: {
    id: string;
    version: number;
    status: EventStatus;
    amount: number;
    pendingAmount: number;
    endDate: string; // It is a Date but converted to string for JSON
  };
}