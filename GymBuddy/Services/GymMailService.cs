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
