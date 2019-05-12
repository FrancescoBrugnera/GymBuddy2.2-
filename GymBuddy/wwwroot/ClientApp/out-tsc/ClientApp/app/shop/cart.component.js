//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var Cart = /** @class */ (function () {
    function Cart(data) {
        this.data = data;
    }
    Cart = tslib_1.__decorate([
        Component({
            selector: "my-cart",
            templateUrl: "cart.component.html",
            styleUrls: []
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], Cart);
    return Cart;
}());
export { Cart };
//# sourceMappingURL=cart.component.js.map