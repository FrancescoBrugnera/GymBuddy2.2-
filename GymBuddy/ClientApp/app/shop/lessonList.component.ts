//the code on this page was inspired and guided from
//https://app.pluralsight.com/library/courses/aspnetcore-mvc-efcore-bootstrap-angular-web/table-of-contents
//https://app.pluralsight.com/library/courses/aspdotnet-core-dependency-injection/table-of-contents
//https://app.pluralsight.com/library/courses/architecting-aspnet-core-mvc-unit-testability/table-of-contents
//https://app.pluralsight.com/library/courses/aspnet-core-fundamentals/table-of-contents

import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Lesson } from "../shared/lesson";

@Component({
    selector: "lesson-list",
    templateUrl: "lessonList.component.html",
    styleUrls: ["lessonList.component.css"]
})
export class LessonList implements OnInit{

    constructor(private data: DataService) {
    }

    public lessons: Lesson[] = [];

    ngOnInit(): void {
        this.data.loadLessons()// boolean returned from the Data Service class
            .subscribe(success => {
                if (success) {
                    this.lessons = this.data.lessons;
                }
            });
    }

    addLesson(lesson: Lesson) {
        this.data.addToOrder(lesson);
    }
}