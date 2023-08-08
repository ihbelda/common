import { Subjects } from "./subjects";
import { EventStatus } from "./types/event-status";

export interface EventCreatedEvent {
  subject: Subjects.EventCreated;
  data: {
    id: string;
    version: number;
    status: EventStatus;
    title: string;
    ownerId: string;
    amount: number;
    pendingAmount: number;
    endDate: string; // It is a Date but converted to string for JSON
  };
}