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
}
