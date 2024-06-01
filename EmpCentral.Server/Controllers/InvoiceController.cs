using Microsoft.AspNetCore.Mvc;

namespace EmpCentral.Server.Controllers
{
    public class InvoiceController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
