﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GymBuddy.ViewModels
{
    public class RegistrationViewModel
    {
        //[Required]
        //[EmailAddress]
        public string Username { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 6)]
        [DataType(DataType.Password)]
        public string Password { get; set; }

        
        [Compare("Password", ErrorMessage = "passwords do not match, reinput")]
        [DataType(DataType.Password)]
        public string ConfirmPassword { get; set; }
    }
}
