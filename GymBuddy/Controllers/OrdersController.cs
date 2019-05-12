//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

using AutoMapper;
using GymBuddy.Data;
using GymBuddy.Data.Entities;
using GymBuddy.Services;
using GymBuddy.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GymBuddy.Controllers
{
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    
    public class OrdersController : Controller
    {
        private readonly IGymBuddyRepository _repository;
        private readonly IMapper _mapper;
        private readonly OrdersService _orderService;

        public OrdersController(OrdersService orderservice, IGymBuddyRepository repository,IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
            _orderService = orderservice;
        }

        [HttpGet]
        public ActionResult Get()
        {
            try
            {
                var username = User.Identity.Name;
                var results = _repository.GetAllOrdersByUser(username);
                return Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(_repository.GetAllOrders()));
            }
            catch
            {
                return BadRequest("failed to return all orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            try
            {
                var username = User.Identity.Name;
                var order = _repository.GetOrderById(username, id);

                if (order != null) return Ok(_mapper.Map<Order,OrderViewModel>(order));
                else return NotFound();
            }
            catch
            {
                return BadRequest("failed to return all orders");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]OrderViewModel model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    Order newOrder = _orderService.NewOrder(model);

                    if (_repository.SaveAll())
                    {
                        return Created($"/api/orders/{newOrder.Id}", _mapper.Map<Order, OrderViewModel>(newOrder));
                    }
                    else
                    {
                        return BadRequest(ModelState);
                    }
                }
            }
            catch
            {
                //
            }
            return BadRequest("could not create order");
        }


    }
}
