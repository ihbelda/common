import { Subjects } from "./subjects";

export interface MemberDeletedEvent {
  subject: Subjects.MemberDeleted;
  data: {
    id: string;
    version: number;
    userId: string;
  };
}
