using AutoMapper;
using GymBuddy.Data;
using GymBuddy.Data.Entities;
using GymBuddy.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GymBuddy.Services
{
    public class OrdersService
    {
        private readonly IGymBuddyRepository _repository;
        private readonly IMapper _mapper;

        public OrdersService(IGymBuddyRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public Order NewOrder(OrderViewModel model)
        {
            var newOrder = _mapper.Map<OrderViewModel, Order>(model);

            if (newOrder.OrderDate == DateTime.MinValue)
            {
                newOrder.OrderDate = DateTime.Now;
            }

            _repository.AddOrder(newOrder);
            return newOrder;
        }
    }
}
