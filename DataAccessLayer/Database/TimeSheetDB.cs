

using CommanAccessLayer.Models;

namespace DataAccessLayer.Database
{
    public class TimeSheetDB
    {


        public List<TimeSheet> GetTimeheetsFromDB()
        {

            List<TimeSheet> timeSheet = new List<TimeSheet>();
            TimeSheet _obj = new TimeSheet();

            _obj.ID = 1;
            _obj.Project = "TimeSheets";
            _obj.Vendor = "Apple";
            _obj.recordedHours = 40;
            _obj.periodStarting = "15th April 2024";
            _obj.periodEnding = "19th April 2024";
            _obj.Status = "In Progress";

            timeSheet.Add(_obj);
            TimeSheet _obj1 = new TimeSheet();

            _obj1.ID = 1;
            _obj1.Project = "TimeSheets";
            _obj1.Vendor = "Apple";
            _obj1.recordedHours = 40;
            _obj1.periodStarting = "8th April 2024";
            _obj1.periodEnding = "12th April 2024";
            timeSheet.Add(_obj1);
            _obj1.Status = "Completed";

            return timeSheet;


        }

        public List<Weeks> GetWeeks()
        {

            List<Weeks> _Weeks = new List<Weeks>();
            Weeks _obj = new Weeks();


            Weeks _obj2 = new Weeks();

            _obj2.ID = 1;
            _obj2.WeekDetails = "JUNE 08, 2024 - JUNE 14, 2024";
            _obj2.FromDate = Convert.ToDateTime("JUNE 08, 2024");
            _obj2.ToDate = Convert.ToDateTime("JUNE 14, 2024");
            _obj2.status = 1;
            _Weeks.Add(_obj2);



            Weeks _obj1 = new Weeks();

            _obj1.ID = 1;
            _obj1.WeekDetails = "JUNE 01, 2024 - JUNE 07, 2024";
            _obj1.FromDate = Convert.ToDateTime("JUNE 01, 2024");
            _obj1.ToDate = Convert.ToDateTime("JUNE 07, 2024");
            _obj1.status = 1;
            _Weeks.Add(_obj1);


            _obj.ID = 1;
            _obj.WeekDetails = "MAY 25, 2024 - MAY 31, 2024";
            _obj.FromDate = Convert.ToDateTime("May 25, 2024");
            _obj.ToDate = Convert.ToDateTime("May 31, 2024");
            _obj.status = 1;
            _Weeks.Add(_obj);




            return _Weeks;


        }

        public List<Project> GetProjects()
        {

            List<Project> _Projects = new List<Project>();
            Project _obj = new Project();


            Project _obj2 = new Project();

            _obj2.ID = 1;
            _obj2.ProjectName = "Apple";
            _Projects.Add(_obj2);



            Project _obj1 = new Project();

            _obj1.ID = 2;
            _obj1.ProjectName = "Microsoft";
            _Projects.Add(_obj2);





            return _Projects;


        }

        public List<Vendor> GetVendors()
        {

            List<Vendor> _Vendor = new List<Vendor>();
            Vendor _obj = new Vendor();


            Vendor _obj2 = new Vendor();

            _obj2.ID = 1;
            _obj2.VendortName = "Capgemini";
            _Vendor.Add(_obj2);



            Vendor _obj1 = new Vendor();

            _obj1.ID = 2;
            _obj1.VendortName = "Tek Systems";
            _Vendor.Add(_obj1);





            return _Vendor;

        }

        public List<TimeSheet> GetTimesheetwithSearch(DateTime? _fromdate, DateTime? _todate)
        {

            List<TimeSheet> timeSheet = new List<TimeSheet>();
            TimeSheet _obj = new TimeSheet();

            _obj.ID = 1;
            _obj.Project = "TimeSheets";
            _obj.Vendor = "Apple";
            _obj.recordedHours = 40;
            _obj.periodStarting = "15th April 2024";
            _obj.periodEnding = "19th April 2024";
            _obj.Status = "In Progress";

            timeSheet.Add(_obj);
            TimeSheet _obj1 = new TimeSheet();

            _obj1.ID = 1;
            _obj1.Project = "TimeSheets";
            _obj1.Vendor = "Apple";
            _obj1.recordedHours = 40;
            _obj1.periodStarting = "8th April 2024";
            _obj1.periodEnding = "12th April 2024";
            timeSheet.Add(_obj1);
            _obj1.Status = "Completed";

            return timeSheet;


        }

    }


}
