using Microsoft.VisualStudio.TestTools.UnitTesting;
using Moq;


namespace TestGym
{
    [TestClass]
    public class UnitTest1
    {
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
}
