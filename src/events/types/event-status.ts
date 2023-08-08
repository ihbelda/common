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