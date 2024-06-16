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

    
    }
}
