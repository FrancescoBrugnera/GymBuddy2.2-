import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { Lesson } from "./lesson";
import { Order, OrderItem } from "./order";

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public order: Order = new Order();

    public lessons: Lesson[] = [];

    loadLessons(): Observable<boolean> {
        return this.http.get("/api/lessons")
            .pipe(
             map((data: any[]) => {
                 this.lessons = data;
                 return true;
                }));
    }

    public addToOrder(newLesson: Lesson) {

        var item: OrderItem = new OrderItem();
        item.id = newLesson.id;
        item.unitPrice = newLesson.price;
        item.quantity = 1;

        this.order.items.push(item);
    }
}