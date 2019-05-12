//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents
import * as tslib_1 from "tslib";
import { Component } from "@angular/core";
import { DataService } from "../shared/dataService";
var LessonList = /** @class */ (function () {
    function LessonList(data) {
        this.data = data;
        this.lessons = [];
    }
    LessonList.prototype.ngOnInit = function () {
        var _this = this;
        this.data.loadLessons() // boolean returned from the Data Service class
            .subscribe(function (success) {
            if (success) {
                _this.lessons = _this.data.lessons;
            }
        });
    };
    LessonList.prototype.addLesson = function (lesson) {
        this.data.addToOrder(lesson);
    };
    LessonList = tslib_1.__decorate([
        Component({
            selector: "lesson-list",
            templateUrl: "lessonList.component.html",
            styleUrls: ["lessonList.component.css"]
        }),
        tslib_1.__metadata("design:paramtypes", [DataService])
    ], LessonList);
    return LessonList;
}());
export { LessonList };
//# sourceMappingURL=lessonList.component.js.map