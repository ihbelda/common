import { Subjects } from "./subjects";

export interface OrderCacelledEvent {
  subject: Subjects.OrderCancelled;
  data: {
    id: string;
    ticket: {
      id: string;
    }
  };
}