declare module "@salesforce/apex/ApprovalRequestController.getPendingApprovalRequests" {
  export default function getPendingApprovalRequests(): Promise<any>;
}
declare module "@salesforce/apex/ApprovalRequestController.takeAction" {
  export default function takeAction(param: {workItemId: any, action: any, comment: any}): Promise<any>;
}
