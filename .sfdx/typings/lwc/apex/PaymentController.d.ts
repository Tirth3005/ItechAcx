declare module "@salesforce/apex/PaymentController.hasRelatedBookings" {
  export default function hasRelatedBookings(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/PaymentController.getPaymentsByBookingId" {
  export default function getPaymentsByBookingId(param: {bookingId: any}): Promise<any>;
}
declare module "@salesforce/apex/PaymentController.getBookingTotal" {
  export default function getBookingTotal(param: {bookingId: any}): Promise<any>;
}
