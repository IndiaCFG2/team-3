import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { DataService } from '../data.service';
>>>>>>> 2f6e173737183d45879c1ca9e12cd2e0d299c18e

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor(private ds: DataService) { }

  lessons:object[] = [];

  ngOnInit() {
    this.lessons = this.ds.getlessons();
    console.log("in lesson component",this.lessons);
>>>>>>> 2f6e173737183d45879c1ca9e12cd2e0d299c18e
  }

}
