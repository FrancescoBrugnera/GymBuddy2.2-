//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using System.ComponentModel.DataAnnotations.Schema;

namespace GymBuddy.Data.Entities
{
    public class Lesson
  {
    public int Id { get; set; }
    public string Category { get; set; }
    public string ClassSize { get; set; }
    [Column(TypeName = "decimal(18,2)")]
    public decimal Price { get; set; }
    public string Title { get; set; }
    public string ClassDescription { get; set; }
    public string Instructor { get; set; }
    public string InstructorNationality { get; set; }
  }
}
