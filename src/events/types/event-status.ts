export enum EventStatus {
  // When the event has been created
  Created = 'created',

  // The members are been added and notified
  Launched = 'launched',

  // Any need for payments
  //AwaitingPayment = 'awaiting:payment',

  // The event has been closed
  Closed = 'closed'
}

export enum MemberStatus {
  // When the member has been created
  Created = 'created',

  // The member has been notified about the invitation
  Notified = 'notified',

  // The member accepted the invitation
  Accepted = 'accepted',

  // The member has paid
  Payed = 'payed',
}