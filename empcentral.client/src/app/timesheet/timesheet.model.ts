export class TimeSheet {
  TimesheetNum: number;
  TimeSheetWeek: number;
  TimesheetMonth: number;
  TimeSheetYear: number;
  TimesheetStartDate: Date;
  TimesheetEndDate: Date;
  TimeSheetTotalHr: number;
  TimesheetSunHr: number;
  TimesheetMonHr: number;
  TimesheetTueHr: number;
  TimesheetWenHr: number;
  TimesheetThuHr: number;
  TimesheetFriHr: number;
  TimesheetSatHr: number;
  TimeSheetAttachmentIds: Array<number>;
  TimeSheetApproved: boolean ;
  constructor(
    timesheetNum: number,
    timeSheetWeek: number,
    timeSheetMonth: number,
    timesheetYear: number,
    timesheetStartDate: Date,
    timesheetEndDate: Date,
    timeSheetTotalHr: number,
    timesheetSunHr: number,
    timesheetMonHr: number,
    timesheetTueHr: number,
    timesheetWenHr: number,
    timesheetThuHr: number,
    timesheetFriHr: number,
    timesheetSatHr: number,
    timeSheetAttachmentIds: Array<number>,
    timeSheetApproved: boolean

  ) {
    this.TimesheetNum = timesheetNum;
    this.TimeSheetWeek = timeSheetWeek;
    this.TimesheetMonth = timeSheetMonth;
    this.TimeSheetYear = timesheetYear;
    this.TimesheetStartDate = timesheetStartDate;
    this.TimesheetEndDate = timesheetEndDate;
    this.TimeSheetTotalHr = timeSheetTotalHr;
    this.TimesheetSunHr = timesheetSunHr;
    this.TimesheetMonHr = timesheetMonHr;
    this.TimesheetTueHr = timesheetTueHr;
    this.TimesheetWenHr = timesheetWenHr;
    this.TimesheetThuHr = timesheetThuHr;
    this.TimesheetFriHr = timesheetFriHr;
    this.TimesheetSatHr = timesheetSatHr;
    this.TimeSheetAttachmentIds = timeSheetAttachmentIds;
    this.TimeSheetApproved = timeSheetApproved;
  }






}
