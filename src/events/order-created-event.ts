import { Subjects } from "./subjects";
import { OrderStatus } from "./types/order-status";

export interface OrderCreatedEvent {
  subject: Subjects.OrderCreated;
  data: {
   id: string;
   status: OrderStatus;
   userId: string;
   expiresAt: string; // It is a Date but converted to string for JSON
   ticket: {
    id: string;
    proce: number;
   }
  };
}