declare module "@salesforce/apex/teamTrackCalendarController.getEmployees" {
  export default function getEmployees(): Promise<any>;
}
declare module "@salesforce/apex/teamTrackCalendarController.getHolidayByMonthAndWeekOffByMonth" {
  export default function getHolidayByMonthAndWeekOffByMonth(param: {month: any, year: any}): Promise<any>;
}
declare module "@salesforce/apex/teamTrackCalendarController.getEmployeeTimeSheetHours" {
  export default function getEmployeeTimeSheetHours(param: {month: any, year: any, empIds: any}): Promise<any>;
}
