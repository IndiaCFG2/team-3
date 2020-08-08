import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //for uploading file
  file:File;
  fileurl: string|ArrayBuffer="";
  filechanged:boolean = false;
  getfile(file: File)
  {
    let reader = new FileReader();
    this.file = file;
    this.filechanged = true;
    reader.readAsDataURL(this.file);
    reader.onload= ()=>{
      this.fileurl= reader.result;
    }
  }

}
