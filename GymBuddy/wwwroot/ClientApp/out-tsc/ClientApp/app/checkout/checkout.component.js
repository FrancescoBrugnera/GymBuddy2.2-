//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from '../shared/dataService';
var Checkout = /** @class */ (function () {
    function Checkout(data) {
        this.data = data;
    }
    Checkout.prototype.onCheckout = function () {
        // TODO
        alert("Checking out, thank you!");
    };
    Checkout = tslib_1.__decorate([
        Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], Checkout);
    return Checkout;
}());
export { Checkout };
//# sourceMappingURL=checkout.component.js.map