import * as tslib_1 from "tslib";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Order, OrderItem } from "./order";
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.order = new Order();
        this.lessons = [];
    }
    DataService.prototype.loadLessons = function () {
        var _this = this;
        //what to expect to a caller
        return this.http.get("/api/lessons")
            .pipe(map(function (data) {
            _this.lessons = data;
            return true;
        }));
    };
    DataService.prototype.addToOrder = function (newLesson) {
        //var item: OrderItem = new OrderItem();
        var item = this.order.items.find(function (i) { return i.id == newLesson.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
            item.id = newLesson.id;
            item.unitPrice = newLesson.price;
            item.quantity = 1;
            //item.title;
            this.order.items.push(item);
        }
    };
    DataService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], DataService);
    return DataService;
}());
export { DataService };
//# sourceMappingURL=dataService.js.map