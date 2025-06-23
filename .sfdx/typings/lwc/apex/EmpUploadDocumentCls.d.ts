declare module "@salesforce/apex/EmpUploadDocumentCls.uploadEmpDocument" {
  export default function uploadEmpDocument(param: {contentDocumentId: any, EmployeeId: any, FileName: any, DocumentName: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.fetchImage" {
  export default function fetchImage(param: {fileName: any, EmployeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.fetchAllImages" {
  export default function fetchAllImages(param: {DocumentName: any, EmployeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.uploadFile" {
  export default function uploadFile(param: {base64: any, filename: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.getFileSizes" {
  export default function getFileSizes(param: {contentVersionIds: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.deleteFileById" {
  export default function deleteFileById(param: {contentVersionId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmpUploadDocumentCls.deleteFileByIdName" {
  export default function deleteFileByIdName(param: {EmployeeId: any, FileName: any}): Promise<any>;
}
