import { Subjects } from "./subjects";

export interface MemberDeletedEvent {
  subject: Subjects.MemberDeleted;
  data: {
    userId: string;
    version: number;
  };
}
