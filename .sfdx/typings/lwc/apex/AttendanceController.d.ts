declare module "@salesforce/apex/AttendanceController.getAttendanceData" {
  export default function getAttendanceData(param: {month: any, year: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getHolidaysByMonth" {
  export default function getHolidaysByMonth(param: {month: any, year: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getFirstClockInDate" {
  export default function getFirstClockInDate(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getCurrentDayClockIn" {
  export default function getCurrentDayClockIn(param: {employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getPartialAbsent" {
  export default function getPartialAbsent(param: {month: any, year: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getLeavesByMonth" {
  export default function getLeavesByMonth(param: {month: any, year: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getWFHByMonth" {
  export default function getWFHByMonth(param: {month: any, year: any, employeeId: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getClockInHours" {
  export default function getClockInHours(): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.getEmployeeAttendanceData" {
  export default function getEmployeeAttendanceData(param: {inputDate: any}): Promise<any>;
}
declare module "@salesforce/apex/AttendanceController.updateAttendanceData" {
  export default function updateAttendanceData(param: {attIds: any, inputDate: any}): Promise<any>;
}
