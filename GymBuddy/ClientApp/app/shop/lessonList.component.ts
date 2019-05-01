import { Component, OnInit } from "@angular/core";
import { DataService } from "../shared/dataService";
import { Lesson } from "../shared/lesson";

@Component({
    selector: "lesson-list",
    templateUrl: "lessonList.component.html",
    styleUrls: []
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