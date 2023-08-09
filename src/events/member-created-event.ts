import { Subjects } from "./subjects";

export interface MemberCreatedEvent {
  subject: Subjects.MemberCreated;
  data: {
    username: string;
    email: string;
    version: number;
  };
}
