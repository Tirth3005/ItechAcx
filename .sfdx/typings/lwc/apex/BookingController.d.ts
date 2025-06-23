declare module "@salesforce/apex/BookingController.getQuoteDetails" {
  export default function getQuoteDetails(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.createBooking" {
  export default function createBooking(param: {quoteId: any, carParking: any, bookingAmount: any, sourceManager: any, totalValueWithGST: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.createPayment" {
  export default function createPayment(param: {paymentMap: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.getPaymentFieldsPicklistValues" {
  export default function getPaymentFieldsPicklistValues(): Promise<any>;
}
declare module "@salesforce/apex/BookingController.saveCapturedImages" {
  export default function saveCapturedImages(param: {recordId: any, imageDataList: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.uploadChunkedFile" {
  export default function uploadChunkedFile(param: {parentId: any, fileName: any, base64Data: any, contentType: any, docType: any, uploadSessionId: any, isLastChunk: any, contentVersionId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.saveUplodededFiles" {
  export default function saveUplodededFiles(param: {parentId: any, fileName: any, base64Data: any, contentType: any, docType: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.updateApplicantDetails" {
  export default function updateApplicantDetails(param: {bookingId: any, applicantDetails: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.saveFile" {
  export default function saveFile(param: {base64Data: any, fileName: any, contentType: any, parentId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.uploadUserDocument" {
  export default function uploadUserDocument(param: {contentDocumentId: any, EmployeeId: any, FileName: any, DocumentName: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.uploadAndLinkUserDocument" {
  export default function uploadAndLinkUserDocument(param: {base64Data: any, fileName: any, linkedRecordId: any, documentName: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.getTotalRate" {
  export default function getTotalRate(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.getMaxAllowedMonths" {
  export default function getMaxAllowedMonths(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.hasRelatedBookings" {
  export default function hasRelatedBookings(param: {quoteId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.saveFileToSalesforce" {
  export default function saveFileToSalesforce(param: {base64: any, fileName: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.getEmailFromOpportunity" {
  export default function getEmailFromOpportunity(param: {bookingId: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.createPaymentMatrix" {
  export default function createPaymentMatrix(param: {payments: any}): Promise<any>;
}
declare module "@salesforce/apex/BookingController.getPaymentToken" {
  export default function getPaymentToken(param: {QuoteId: any}): Promise<any>;
}
