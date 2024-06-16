

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

    }


}
