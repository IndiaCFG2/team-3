import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  lessons:any[];
  grade: string;
  subject : string;
  constructor() {
    this.grade="Grade";
    this.subject="Subject";
    this.lessons=[];
    this.lessons.push({name:'Lesson 1', url:'url'});
    this.lessons.push({name:'Lesson 2', url:'url'});
   
  }
   

  ngOnInit(): void {
  }

}
