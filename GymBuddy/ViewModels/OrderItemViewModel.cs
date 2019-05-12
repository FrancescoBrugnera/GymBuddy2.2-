﻿//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using System.ComponentModel.DataAnnotations;

namespace GymBuddy.ViewModels
{
    public class OrderItemViewModel
    {
        //[Required]
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        //[Column(TypeName = "decimal(18,2)")]
        [Required]
        public decimal UnitPrice { get; set; }
        
    }
}