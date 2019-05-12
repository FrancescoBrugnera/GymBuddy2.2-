//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";
var Login = /** @class */ (function () {
    function Login(data, router) {
        this.data = data;
        this.router = router;
        this.errorMessage = "";
        this.credentials = {
            username: "",
            password: ""
        };
    }
    Login = tslib_1.__decorate([
        Component({
            selector: "login",
            templateUrl: "login.component.html"
        }),
        tslib_1.__metadata("design:paramtypes", [DataService, Router])
    ], Login);
    return Login;
}());
export { Login };
//# sourceMappingURL=login.component.js.map