using AutoMapper;
using GymBuddy.Data;
using GymBuddy.Data.Entities;
using GymBuddy.Services;
using GymBuddy.ViewModels;
using Moq;
using Xunit;

namespace GymBuddyTest
{
    public class UnitTest1
    {
        [Fact]
        public void Test1() {}

            private readonly Mock<IGymBuddyRepository> _repository = new Mock<IGymBuddyRepository>();
            private readonly Mock<IMapper> _mapper = new Mock<IMapper>();

            [Fact]
            public void TestNewOrder()
            {
            var ordersService = new OrdersService(_repository.Object, _mapper.Object);

            var model = new OrderViewModel { OrderNumber = "1" };

            var expectedOrder = new Order();
            model.OrderNumber = "1";

            _mapper.Setup(mapper => mapper.Map<OrderViewModel, Order>(model)).Callback(() => { }).Returns(expectedOrder);

            var actualOrder = ordersService.NewOrder(model);

            _repository.Verify(repository => repository.AddOrder(actualOrder), Times.Once);

            Assert.Same(expectedOrder, actualOrder);
            }
    }
}


 
