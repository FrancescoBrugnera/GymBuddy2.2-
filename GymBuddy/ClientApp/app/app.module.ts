//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LessonList } from "./shop/lessonList.component";
import { Cart } from "./shop/cart.component";
import { DataService } from "./shared/dataService";

import { RouterModule } from "@angular/router";

import { Shop } from "./shop/shop.component";
import { Checkout } from "./checkout/checkout.component";

let routes = [
    { path: "", component: Shop },
    { path: "checkout", component: Checkout }
]

@NgModule({
  declarations: [
      AppComponent,
      LessonList,
      Cart,
      Shop,
      Checkout
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes, {
          useHash: true,
          enableTracing: false
      })
  ],
    providers: [
        DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
