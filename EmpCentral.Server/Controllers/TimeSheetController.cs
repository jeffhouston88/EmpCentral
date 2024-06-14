
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using CommanAccessLayer;
using BusinessAccessLayer;
using CommanAccessLayer.Models;
using BusinessAccessLayer.Interface;
using Microsoft.AspNetCore.Cors;

namespace EmpCentral.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TimeSheetController : ControllerBase
    {

        ITimesheet _timesheet = new Timesheet();

     


        [HttpGet("GetTimesheets")]
        public ActionResult<List<TimeSheet>> Get()
        {
            var timesheets = _timesheet.getTimesheets();
            return Ok(timesheets);
        }



        [HttpGet("GetCount")]
        public int GetCount()
        {
            return _timesheet.getTimesheets().Count;
        }

        //[HttpPost(Name = "CreateTimeSheet")]
        //public bool  Get(CreateTimesheets obj)
        //{
        //    return true;
        //}
    }
}
