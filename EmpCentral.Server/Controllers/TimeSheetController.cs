
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



        [HttpGet("GetWeeks")]
        public ActionResult<List<Weeks>> GetWeeks()
        {
            return _timesheet.getWeeks();
        }


        [HttpGet("GetProjects")]
        public ActionResult<List<Project>> GetProjects()
        {
            return _timesheet.getProjects();
        }


        [HttpGet("GetVendors")]
        public ActionResult<List<Vendor>> GetVendors()
        {
            return _timesheet.getVendor();
        }

        [HttpGet("GetTimesheetwithSearch")]
        public ActionResult<List<TimeSheet>> GetTimesheetwithSearch([FromQuery] DateTime startDate, [FromQuery] DateTime endDate)
        {
            var timesheets = _timesheet.GetTimesheetwithSearch(startDate, endDate);
            return Ok(timesheets);
        }

        [HttpPost("UploadFile")]
        public async Task<IActionResult> UploadFile(IFormFile file)
        {
            if (file == null || file.Length == 0)
            {
                return BadRequest("No file uploaded");
            }

            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "uploads", file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await file.CopyToAsync(stream);
            }

            return Ok(new { filePath });
        }
        //[HttpPost(Name = "CreateTimeSheet")]
        //public bool  Get(CreateTimesheets obj)
        //{
        //    return true;
        //}
    }
}
