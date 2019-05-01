﻿import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";// reactive extension to javascript
import { Lesson } from "./lesson";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public order: Order = new Order();

    public lessons: Lesson[] = [];

    loadLessons(): Observable<boolean> {// returning a boolean so that we give an understanding of 
                                        //what to expect to a caller
        return this.http.get("/api/lessons")
            .pipe(
             map((data: any[]) => {
                 this.lessons = data;
                 return true;
                }));
    }

    public addToOrder(newLesson: Lesson) {

        //var item: OrderItem = new OrderItem();

        let item: OrderItem = this.order.items.find(i => i.id == newLesson.id)

        if (item) {

            item.quantity++;

        } else {

            item = new OrderItem();
            item.id = newLesson.id;
            item.unitPrice = newLesson.price;
            item.quantity = 1;
            //item.title;

            this.order.items.push(item);
        }
    }
}