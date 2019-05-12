//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using System.Collections.Generic;
using GymBuddy.Data.Entities;

namespace GymBuddy.Data
{
    public interface IGymBuddyRepository
    {
        IEnumerable<Lesson> GetAllLessons();
        IEnumerable<Lesson> GetLessonsByCategory(string category);

        bool SaveAll();

        IEnumerable<Order> GetAllOrders();
        Order GetOrderById(string username, int id);
        void AddOrder(object model);
        void AddOrderItem(object model);
        IEnumerable<Order> GetAllOrdersByUser(string username);
    }
}