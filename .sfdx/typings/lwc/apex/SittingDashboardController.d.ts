declare module "@salesforce/apex/SittingDashboardController.getEmployeeSittingDetails" {
  export default function getEmployeeSittingDetails(param: {empId: any, inputDate: any}): Promise<any>;
}
declare module "@salesforce/apex/SittingDashboardController.getEmployeeSittingDetailsOutOfOffice" {
  export default function getEmployeeSittingDetailsOutOfOffice(param: {empId: any, inputDate: any}): Promise<any>;
}
declare module "@salesforce/apex/SittingDashboardController.getEmployeeSittingClockIn_OutDetails" {
  export default function getEmployeeSittingClockIn_OutDetails(param: {inputDate: any}): Promise<any>;
}
declare module "@salesforce/apex/SittingDashboardController.getOSEmployeeSittingClockIn_OutDetails" {
  export default function getOSEmployeeSittingClockIn_OutDetails(param: {inputDate: any}): Promise<any>;
}
declare module "@salesforce/apex/SittingDashboardController.getClockInHours" {
  export default function getClockInHours(): Promise<any>;
}
declare module "@salesforce/apex/SittingDashboardController.clockInOutHours" {
  export default function clockInOutHours(param: {d: any}): Promise<any>;
}
