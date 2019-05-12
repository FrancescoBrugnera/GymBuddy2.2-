//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GymBuddy.Services
{
    public class GymMailService
    {
        private readonly ILogger<GymMailService> _logger;
        public GymMailService(ILogger<GymMailService> logger)
        {
            _logger = logger;
        }

        public void SendMessage(string to, string subject, string body)
        {
            //_logger.LogInformation
        }
    }
}
