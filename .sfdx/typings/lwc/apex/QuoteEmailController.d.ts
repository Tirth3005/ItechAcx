declare module "@salesforce/apex/QuoteEmailController.getEmailTemplates" {
  export default function getEmailTemplates(): Promise<any>;
}
declare module "@salesforce/apex/QuoteEmailController.getEmailBody" {
  export default function getEmailBody(param: {templateId: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteEmailController.sendEmail" {
  export default function sendEmail(param: {to: any, cc: any, templateId: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteEmailController.getPrimaryContactEmail" {
  export default function getPrimaryContactEmail(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/QuoteEmailController.sendBookingEmail" {
  export default function sendBookingEmail(param: {contactId: any, bookingId: any, templateId: any}): Promise<any>;
}
