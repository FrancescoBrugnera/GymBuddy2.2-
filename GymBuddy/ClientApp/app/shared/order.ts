//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

import * as _ from "lodash";

export class Order {
    orderId: number;
    orderDate: Date = new Date();
    orderNumber: string;
    items: Array<OrderItem> = new Array<OrderItem>();

    get subtotal(): number {// read only, no one allowed to set this!!!
        return _.sum(_.map(this.items, i => i.unitPrice * i.quantity));
    };
    //.map creates a collection of items first and it is then going to sum them

}

export class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    //title: string;
}