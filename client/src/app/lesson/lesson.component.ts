import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor(private ds: DataService) { }

  lessons:object[] = [];

  ngOnInit() {
    this.lessons = this.ds.getlessons();
    console.log("in lesson component",this.lessons);
  }

}
