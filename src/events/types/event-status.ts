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
  // When the event has been created
  Created = 'created',

  // The members are been added and notified
  Nofified = 'notified',

  // Any need for payments
  //AwaitingPayment = 'awaiting:payment',

  // The event has been closed
  Payed = 'payed',
}