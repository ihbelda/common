import { Subjects } from "./subjects";

export interface MemberCreatedEvent {
  subject: Subjects.MemberCreated;
  data: {
    userId: string;
    email: string;
    version: number;
  };
}
