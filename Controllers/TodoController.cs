using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Text.Json;
using MyReactApp;
using System.Xml.Linq;

namespace MyReactApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodoController : ControllerBase
    {
        private readonly Itask _taskService;
        public IEnumerable<Task> Tasks { get; set; }
        public TodoController(Itask taskService)
        {
            _taskService = taskService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var tasks = _taskService.GetTasks();
            // Serialize the list of tasks to JSON
            string jsonString = JsonSerializer.Serialize(tasks);

            return Ok(jsonString);
        }
        [HttpPost("taskback")]
        public IActionResult Recievedata([FromBody] Task requestdata)
        {

            
            Console.WriteLine("data Updated succesfully");
            if (requestdata != null)
            {
                var updatedTask = _taskService.Update(requestdata);
                return Ok(updatedTask);

            }
            else
            {
                return BadRequest("Invalid Data Recieve");
            }
            

        }
       
    }

    // Define the Task class
    
}
