using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Web.Mvc;
using GymBuddy.Controllers;


namespace GymBuddyTests
{
    [TestClass]
    public class ControllerTests
    {
        [TestMethod]
        public void Index()
        {
            GymController controller = new GymController();
            ViewResult result = controller.Index as ViewResult;
            Assert.IsNotNull(result);
        }
    }
}
