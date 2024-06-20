using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CommanAccessLayer.Models
{
    public class TimeSheet
    {

        public int ID { get; set; }

        public string Vendor { get; set; }

        public string Project { get; set; }

        public int WeekId { get; set; }

        public string periodStarting { get; set; }

        public string periodEnding { get; set; }

        public string Status { get; set; }

        public int recordedHours { get; set; }
    }

    public class Weeks
    {

        public int ID { get; set; }

        public string WeekDetails { get; set; }

        public DateTime FromDate { get; set; }

        public DateTime ToDate { get; set; }

        public int status { get; set; }


    }


    public class Project
    {
        public int ID { get; set; }

        public string ProjectName { get; set; }

    }

    public class Vendor
    {
        public int ID { get; set; }

        public string VendortName { get; set; }

    }

    public class SearchTimesheets
    {

        public DateTime fromdate { get; set; }

        public DateTime todate { get; set; }


    }

    public class CreateTimesheets
    {

        public IFormFile file { get; set; }
        public int EmployeeID { get; set; }
        public int weekID {  get; set; }
        public int ProjectID { get; set; }
        public int vendorID { get; set; }
        public int day1 { get; set; }
        public int day2 { get; set; }
        public int day3 { get; set; }
        public int day4 { get; set; }
        public int day5 { get; set; }
        public int day6 { get; set; }
        public int day7 { get; set; }
        public int total { get; set; }






    }
}
