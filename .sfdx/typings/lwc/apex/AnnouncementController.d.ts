declare module "@salesforce/apex/AnnouncementController.deleteNotification" {
  export default function deleteNotification(param: {currentDeletingId: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchNotificationData" {
  export default function fetchNotificationData(param: {recordType: any, limits: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchNotificationCount" {
  export default function fetchNotificationCount(): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchNotificationPostCount" {
  export default function fetchNotificationPostCount(): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.insertNotificationData" {
  export default function insertNotificationData(param: {content: any, expirationDate: any, annonceById: any, notiType: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.createPostFiles" {
  export default function createPostFiles(param: {fileData: any, recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.updateNotificationData" {
  export default function updateNotificationData(param: {notificationData: any, notiType: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchImage" {
  export default function fetchImage(param: {fileName: any, EmployeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchProfileImg" {
  export default function fetchProfileImg(): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.fetchPostImg" {
  export default function fetchPostImg(): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.deletePostImage" {
  export default function deletePostImage(param: {contentVersionId: any, postId: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.getContentVersionData" {
  export default function getContentVersionData(param: {contentVersionId: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.checkFileSize" {
  export default function checkFileSize(param: {cvIdList: any}): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.getEmployeesBirthdays" {
  export default function getEmployeesBirthdays(): Promise<any>;
}
declare module "@salesforce/apex/AnnouncementController.getEmployeesWorkAnniversary" {
  export default function getEmployeesWorkAnniversary(): Promise<any>;
}
