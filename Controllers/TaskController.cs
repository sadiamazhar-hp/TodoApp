using Microsoft.AspNetCore.Mvc;

namespace MyReactApp.Controllers
{
    [ApiController]
    [Route("task")]
    public class TaskController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return Json(new { foo = "bar", baz = "Blech" });
        }
    }
}
