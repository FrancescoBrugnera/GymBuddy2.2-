import * as _ from "lodash";
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.items = new Array();
        //.map creates a collection of items first and it is then going to sum them
    }
    Object.defineProperty(Order.prototype, "subtotal", {
        get: function () {
            return _.sum(_.map(this.items, function (i) { return i.unitPrice * i.quantity; }));
        },
        enumerable: true,
        configurable: true
    });
    ;
    return Order;
}());
export { Order };
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
export { OrderItem };
//# sourceMappingURL=order.js.map