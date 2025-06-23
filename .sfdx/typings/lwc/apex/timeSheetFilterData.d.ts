declare module "@salesforce/apex/timeSheetFilterData.getTimesheetDataWithDateFilter" {
  export default function getTimesheetDataWithDateFilter(param: {selectedDate: any, selectedToDate: any, projectNames: any, employeeName: any}): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.getTicketHistory" {
  export default function getTicketHistory(param: {EmpId: any, selectedTicket: any, selectedEntireSheet: any, selectedOption: any}): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.getEmployeeData" {
  export default function getEmployeeData(param: {EmpId: any}): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.getTimesheetData" {
  export default function getTimesheetData(param: {selectedDate: any, projectNames: any, employeeName: any}): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.getEmployeeNames" {
  export default function getEmployeeNames(): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.projectNames" {
  export default function projectNames(): Promise<any>;
}
declare module "@salesforce/apex/timeSheetFilterData.updateEmployeeRecords" {
  export default function updateEmployeeRecords(param: {selectedProjectName: any, selectedEmployeName: any}): Promise<any>;
}
