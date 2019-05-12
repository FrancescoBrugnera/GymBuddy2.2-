//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Router } from "@angular/router";

@Component({
    selector: "login",
    templateUrl: "login.component.html"
})

export class Login {

    constructor(private data: DataService, private router: Router) {
    }

    errorMessage: string = "";
    public credentials = {
        username: "",
        password: ""
    };

    //onLogin() {
    //    this.data.login(this.credentials)
    //        .subscribe(success => {
    //            if (success) {
    //                if (this.data.order.items.length == 0) {
    //                    this.router.navigate([""]);
    //                } else {
    //                    this.router.navigate(["checkout"]);
    //                }
    //            }
    //        }, err => this.errorMessage = "Failed to login" )
    //}
}