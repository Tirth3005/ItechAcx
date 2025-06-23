declare module "@salesforce/apex/StripePaymentService.createPaymentLinkWithAmount" {
  export default function createPaymentLinkWithAmount(param: {amount: any, bookingId: any}): Promise<any>;
}
declare module "@salesforce/apex/StripePaymentService.sendPaymentLinkEmail" {
  export default function sendPaymentLinkEmail(param: {amount: any, paymentLink: any, recordId: any}): Promise<any>;
}
