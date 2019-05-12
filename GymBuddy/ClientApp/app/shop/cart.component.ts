//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";

@Component({
    selector: "my-cart",
    templateUrl: "cart.component.html",
    styleUrls: []
})
export class Cart {
    constructor(private data: DataService) {}
}