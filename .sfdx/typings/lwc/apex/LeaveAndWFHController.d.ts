declare module "@salesforce/apex/LeaveAndWFHController.getWFHData" {
  export default function getWFHData(): Promise<any>;
}
declare module "@salesforce/apex/LeaveAndWFHController.saveWFHData" {
  export default function saveWFHData(param: {wfhRequest: any, EmpRecordId: any, numberOfDays: any}): Promise<any>;
}
declare module "@salesforce/apex/LeaveAndWFHController.getLeaveData" {
  export default function getLeaveData(): Promise<any>;
}
declare module "@salesforce/apex/LeaveAndWFHController.getLeaveRequests" {
  export default function getLeaveRequests(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/LeaveAndWFHController.saveLeaveData" {
  export default function saveLeaveData(param: {leaveRequest: any, EmpRecordId: any, numberOfDays: any, paidLeave: any, unpaidLeave: any}): Promise<any>;
}
