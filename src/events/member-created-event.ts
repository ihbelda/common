import { Subjects } from "./subjects";

export interface MemberCreatedEvent {
  subject: Subjects.MemberCreated;
  data: {
    id: string;
    version: number;
    userId: string;
    amount: number;
    email: string;
  };
}
