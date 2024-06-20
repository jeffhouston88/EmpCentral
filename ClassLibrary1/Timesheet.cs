using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BusinessAccessLayer.Interface;
using CommanAccessLayer;
using CommanAccessLayer.Models;
using DataAccessLayer.Database;

namespace BusinessAccessLayer
{
    public class Timesheet : ITimesheet
    {

        TimeSheetDB _db = new TimeSheetDB();



        public List<TimeSheet> getTimesheets()
        {

            return _db.GetTimeheetsFromDB();

        }

        public List<Weeks> getWeeks()
        {
            return _db.GetWeeks();
        }

        public List<Project> getProjects()
        {

            return _db.GetProjects();
        }



        public List<Vendor> getVendor()
        {
            return _db.GetVendors();
        }

        public List<TimeSheet> GetTimesheetwithSearch(DateTime? _fromdate, DateTime? _todate)
        {

            return _db.GetTimesheetwithSearch(_fromdate, _todate);

        }
    }
}
