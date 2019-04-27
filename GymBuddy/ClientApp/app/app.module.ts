import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { LessonList } from "./shop/lessonList.component";
import { Cart } from "./shop/cart.component";
import { DataService } from "./shared/dataService";

@NgModule({
  declarations: [
      AppComponent,
      LessonList,
      Cart
  ],
  imports: [
      BrowserModule,
      HttpClientModule
  ],
    providers: [
        DataService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
