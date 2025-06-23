declare module "@salesforce/apex/timesheetTableController.gettimesheetData" {
  export default function gettimesheetData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.saveTimesheetRecords" {
  export default function saveTimesheetRecords(param: {timesheetList: any, EmpRecordId: any, selectedDate: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getTimesheetRecordsBasedonDate" {
  export default function getTimesheetRecordsBasedonDate(param: {selectedDate: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getTimesheet" {
  export default function getTimesheet(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getAttendanceData" {
  export default function getAttendanceData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getEmployeeData" {
  export default function getEmployeeData(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.deleteTimeSheetRecord" {
  export default function deleteTimeSheetRecord(param: {TimeSheetRecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getTimesheetRecords" {
  export default function getTimesheetRecords(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getIsLockedFieldValue" {
  export default function getIsLockedFieldValue(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getProjectAllottedHours" {
  export default function getProjectAllottedHours(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.saveProjectAllottedHours" {
  export default function saveProjectAllottedHours(param: {projectAllottedHours: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.deleteProjectAllottedHour" {
  export default function deleteProjectAllottedHour(param: {recordId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getProjectNames" {
  export default function getProjectNames(): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getProjects" {
  export default function getProjects(): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.insertProjectAllotedHour" {
  export default function insertProjectAllotedHour(param: {selectedDate: any, allotedHours: any, projectId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getEployeeRole" {
  export default function getEployeeRole(): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getProjectWiseHours" {
  export default function getProjectWiseHours(param: {selectedDate: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.getProjectAllotedHours" {
  export default function getProjectAllotedHours(param: {selectedDate: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.deleteProjectAllotedHourRecord" {
  export default function deleteProjectAllotedHourRecord(param: {projectAHId: any}): Promise<any>;
}
declare module "@salesforce/apex/timesheetTableController.saveProjectAllotedRecords" {
  export default function saveProjectAllotedRecords(param: {timesheetList: any, selectedDate: any, isInsert: any}): Promise<any>;
}
