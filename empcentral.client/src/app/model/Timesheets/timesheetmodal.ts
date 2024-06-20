export interface Timesheets {
    ID: number;
    statusID:number
    project: string;
    vendor: string;
    status: string;
    recordedHours: number;
    periodStarting: string;
    periodEnding: string;
   day1: number;
   day2: number;
   day3: number;
   day4: number;
   day5: number;
   day6: number;
   day7: number;
   attachment: string;
}


export interface week{

    id: number;
    weekDetails: string;
    fromDate:Date;
    toDate:Date;
    status:number;

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