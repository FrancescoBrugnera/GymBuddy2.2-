//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using GymBuddy.Data;
using GymBuddy.Data.Entities;
using GymBuddy.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace GymBuddy.Controllers
{
    public class GymController : Controller
    {
        private readonly GymBuddyContext _context;
        private readonly IGymBuddyRepository _repo;
        private readonly UserManager<UserStore> _userManager;
        //private object _mailService;

        public GymController(GymBuddyContext context, IGymBuddyRepository repo, UserManager<UserStore> userManager)
        {
            _context = context;
            _repo = repo;
            _userManager = userManager;
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
            //var results = _repo.GetAllLessons();

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Register(RegistrationViewModel registration)
        {
            if (ModelState.IsValid)
            {
                var user = await _userManager.FindByEmailAsync(registration.Username);
                if (user == null)
                {
                    user = new UserStore
                    {
                        //Id = Guid.NewGuid().ToString(),
                        UserName = registration.Username,
                        Email = registration.Username
                    };

                    IdentityResult result = await _userManager.CreateAsync(user, registration.Password);
                }
                
                return View();
            }
            return View();
        }

        public IActionResult Register()
        {
            return View();
        }
    }
}
