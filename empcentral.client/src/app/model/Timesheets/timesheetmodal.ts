export interface Timesheets {
    ID: number;
    project: string;
    Vendor: string;
    status: string;
    recordedHours: number;
    periodStarting: string;
    periodEnding: string;
}


export interface CreateTimesheets {
   TimetSheetDetails:Timesheets;
   Day1: number;
   Day2: number;
   Day3: number;
   Day4: number;
   Day5: number;
   Day6: number;
   Day7: number;
   attachment: string;
}