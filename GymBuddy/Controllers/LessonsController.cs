using GymBuddy.Data;
using GymBuddy.Data.Entities;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GymBuddy.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]// tells swagger what controller is an API controller
    [Produces("application/json")]// always returns JSON
    public class LessonsController : Controller
    {
        private readonly IGymBuddyRepository _repository;

        public LessonsController(IGymBuddyRepository repository)
        {
            _repository = repository;
        }

        [HttpGet]
        [ProducesResponseType(200)]
        [ProducesResponseType(400)]
        public ActionResult<IEnumerable<Lesson>> Get()
        {
            try
            {
                return Ok(_repository.GetAllLessons());// the use ok Ok object supports the swagger documentation
            }
            catch
            {
                return BadRequest("failed to return all lessons");
            }
            
        }
    }
}

