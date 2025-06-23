declare module "@salesforce/apex/CashfreeAadhaarController.sendOtp" {
  export default function sendOtp(param: {aadhaarNumber: any}): Promise<any>;
}
declare module "@salesforce/apex/CashfreeAadhaarController.verifyOtp" {
  export default function verifyOtp(param: {refId: any, otp: any}): Promise<any>;
}
