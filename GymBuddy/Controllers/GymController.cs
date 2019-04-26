using GymBuddy.Data;
using GymBuddy.Data.Entities;
using GymBuddy.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace GymBuddy.Controllers
{
    public class GymController : Controller
    {
        private readonly GymBuddyContext _context;
        private readonly IGymBuddyRepository _repo;
        private object _mailService;

        public GymController(GymBuddyContext context, IGymBuddyRepository repo)
        {
            _context = context;
            _repo = repo;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("contact")]
        public IActionResult Contact()
        {
            //throw new InvalidOperationException("An error has occurred");
            return View();
        }

        [HttpPost("contact")]
        public IActionResult Contact(ContactViewModel model)
        {
            if (ModelState.IsValid)
            {
                //send e-mail
                //_mailService.SendMail("francesco.brugnera@hotmail.com", model.Subject, $"From: {model.Email}, Message: {model.Message}");
            }
            else
            {

            }
            return View();
        }

        [Authorize]
        public IActionResult Shop()
        {
            var results = _repo.GetAllLessons();
            return View(results);
        }
    }
}
