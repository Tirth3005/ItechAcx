declare module "@salesforce/apex/OCRController.getFileContentAsBase64" {
  export default function getFileContentAsBase64(param: {contentDocumentId: any}): Promise<any>;
}
declare module "@salesforce/apex/OCRController.renameUploadedFile" {
  export default function renameUploadedFile(param: {contentDocumentId: any, newTitle: any}): Promise<any>;
}
declare module "@salesforce/apex/OCRController.extractTextUsingOCR" {
  export default function extractTextUsingOCR(param: {base64File: any, fileName: any, bookingId: any}): Promise<any>;
}
declare module "@salesforce/apex/OCRController.extractPanCardOCR" {
  export default function extractPanCardOCR(param: {base64File: any, fileName: any, bookingId: any}): Promise<any>;
}
