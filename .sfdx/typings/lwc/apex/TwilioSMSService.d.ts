declare module "@salesforce/apex/TwilioSMSService.sendSMS" {
  export default function sendSMS(param: {messageBody: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/TwilioSMSService.getMessages" {
  export default function getMessages(param: {recordId: any}): Promise<any>;
}
