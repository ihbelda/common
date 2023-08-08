import { Subjects } from './subjects';

export interface MemberPayedEvent {
  subject: Subjects.MemberPayed;
  data: {
    id: string;
    eventId: string;
    stripeId: string;
  };
}
