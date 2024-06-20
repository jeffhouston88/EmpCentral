using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using CommanAccessLayer;
using CommanAccessLayer.Models;

namespace BusinessAccessLayer.Interface
{
    public interface ITimesheet
    {

        List<TimeSheet> getTimesheets();
        List<Weeks> getWeeks();

        List<Project> getProjects();

        List<Vendor> getVendor();

        List<TimeSheet> GetTimesheetwithSearch(DateTime? _fromdate, DateTime? _todate);


    }
}
