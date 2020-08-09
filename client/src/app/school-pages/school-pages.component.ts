import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-school-pages',
  templateUrl: './school-pages.component.html',
  styleUrls: ['./school-pages.component.css']
})
export class SchoolPagesComponent implements OnInit {

  constructor(private http:HttpClient, private router: Router, private ds: DataService) { 
    this.lessons=[];
  }

  lessons:object[] = [];

  

  ngOnInit(): void {

    this.http.get("http://localhost:5000/lessons").subscribe((response)=>{
      this.lessons = response['lessons'];
      console.log(this.lessons);
    })
    
  }

  filter(a:string, b:string){
    let templessons:object[]=[];
    console.log(a,b);
    for(let i=0;i<this.lessons.length;i++){
      if(this.lessons[i]['grade']==a && this.lessons[i]['subject']==b){

        templessons.push(this.lessons[i]);

      }
    }
    
    this.ds.writelessons(templessons);
    this.router.navigate(['/lessons']);

  }

}
