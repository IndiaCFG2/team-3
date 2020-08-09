import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ModalserviceService } from '../modalservice.service';
import { ModalComponent } from '../modal/modal.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor(private ds: DataService, public ms: ModalserviceService, private dialog: MatDialog) { }

  lessons:object[] = [];
  grade:string = '';
  subject:string = '';

  ngOnInit() {
    
    this.lessons = this.ds.getlessons();
    this.grade = this.ds.grade;
    this.subject = this.ds.subject;
    console.log("in lesson component",this.lessons);
  }

  viewdetailed(id:string){

    console.log(id);

  }

  showmodal(url: string){
    console.log(url);
    this.ms.write('Share this link', 'http://localhost:4200/detailedlesson/'+url );
    this.dialog.open(ModalComponent)
  }

}
