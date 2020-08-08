import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-school-pages',
  templateUrl: './school-pages.component.html',
  styleUrls: ['./school-pages.component.css']
})
export class SchoolPagesComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:5000/lessons").subscribe((response)=>{console.log(response)})
  }

}
