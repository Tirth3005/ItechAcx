declare module "@salesforce/apex/EmployeeController.getEmployeeByUsernameAndPassword" {
  export default function getEmployeeByUsernameAndPassword(param: {username: any, password: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getUserRecordsDetails" {
  export default function getUserRecordsDetails(param: {username: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getNotificationInformation" {
  export default function getNotificationInformation(param: {username: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateEmployeeRecord" {
  export default function updateEmployeeRecord(param: {usernameId: any, isLogin: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateData" {
  export default function updateData(param: {recordId: any, ClockInOutStatus: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.insertClockinRecords" {
  export default function insertClockinRecords(param: {EmpRecordId: any, reasonType: any, reasonComment: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateClockoutRecords" {
  export default function updateClockoutRecords(param: {EmpRecordId: any, reasonType: any, reasonComment: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.requestClkInClkOut" {
  export default function requestClkInClkOut(param: {EmpRecordId: any, reasonType: any, reasonComment: any, ClkInOutId: any, ClkInOutDate: any, entryType: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getWFHData" {
  export default function getWFHData(): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getLeaveData" {
  export default function getLeaveData(): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.saveWFHData" {
  export default function saveWFHData(param: {wfhRequest: any, EmpRecordId: any, numberOfDays: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.saveLeaveData" {
  export default function saveLeaveData(param: {leaveRequest: any, EmpRecordId: any, numberOfDays: any, paidLeave: any, unpaidLeave: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateClockOutTime" {
  export default function updateClockOutTime(param: {EmpRecordId: any, clockOutDateTime: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getClockInTime" {
  export default function getClockInTime(param: {EmpRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getAttendanceTotalClockInHours" {
  export default function getAttendanceTotalClockInHours(param: {EmpRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getClockInOutData" {
  export default function getClockInOutData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getUserEmailAndSendEmail" {
  export default function getUserEmailAndSendEmail(param: {username: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.sendRestPasswordEmail" {
  export default function sendRestPasswordEmail(param: {employee: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updatePassword" {
  export default function updatePassword(param: {username: any, newPassword: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getWorkFromHomeRecords" {
  export default function getWorkFromHomeRecords(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateWorkFromHomeStatus" {
  export default function updateWorkFromHomeStatus(param: {recordId: any, status: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getLeaveRequestRecords" {
  export default function getLeaveRequestRecords(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getLeaveRequests" {
  export default function getLeaveRequests(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getWFHRequests" {
  export default function getWFHRequests(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getLeaveCountByType" {
  export default function getLeaveCountByType(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateLeaveRequestStatus" {
  export default function updateLeaveRequestStatus(param: {recordId: any, status: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getNumberOfNonBusinessDays" {
  export default function getNumberOfNonBusinessDays(param: {startDate: any, endDate: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getEmployeeDetails" {
  export default function getEmployeeDetails(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getEmpDataById" {
  export default function getEmpDataById(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getEmployeeAllDetails" {
  export default function getEmployeeAllDetails(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.fetchEmployeeDetails" {
  export default function fetchEmployeeDetails(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.fetchEmpEducationData" {
  export default function fetchEmpEducationData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.fetchEmpExperienceData" {
  export default function fetchEmpExperienceData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateEmployeeDetails" {
  export default function updateEmployeeDetails(param: {employeeData: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateEmpEducationData" {
  export default function updateEmpEducationData(param: {jsonData: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.updateEmpExperianceData" {
  export default function updateEmpExperianceData(param: {jsonData: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.deleteRecordById" {
  export default function deleteRecordById(param: {recordId: any, objName: any}): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.getAllPicklistValues" {
  export default function getAllPicklistValues(): Promise<any>;
}
declare module "@salesforce/apex/EmployeeController.picklistValues" {
  export default function picklistValues(param: {objectName: any, fieldName: any}): Promise<any>;
}
