import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import * as firebase from 'firebase/app';
import 'firebase/storage'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  upload: boolean = false;
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

    
    console.log( window.location.pathname.split( '/')[2]);
    console.log( window.location.pathname.split( '/')[3]);


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

  submitnew(Form: NgForm){
    if(Form.value){
      let obj;

      if(this.upload){
        
        const reference = firebase.storage().ref();
    
        const timestamp = Date.now();
    
        let task = reference.child(timestamp.toString()).put(this.file);
        this.isLoading = true;
        obj = {
          ...Form.value,
          views: 0,
          
          timestamp: timestamp
        }
    
        task.then((snapshot)=>{
          return snapshot.ref.getDownloadURL()
        }).then((url) => {
          console.log(url);
          const timestamp = Date.now();
          obj['fileURL'] = url,
            console.log("obj=", obj);
          this.http.post('http://localhost:5000/lessons/add', obj).subscribe((resp)=>{
            console.log(resp);
            this.isLoading = false;
            if(resp == 'Lesson added!'){
              alert("Lesson added successfully!!");
            }
            else{
              alert("An failure had occured")
            }
          })
        });
      }
      else{
        const timestamp = Date.now();
        obj = {
          ...Form.value,
          timestamp: timestamp,
          views: 0,
        }
        console.log("obj=", obj);
        this.isLoading = true
        this.http.post('http://localhost:5000/lessons/add', obj).subscribe((resp)=>{
            console.log(resp);
            this.isLoading = false;
            if(resp == 'Lesson added!'){
              alert("Lesson added successfully!!");
            }
            else{
              alert("An failure had occured")
            }
          })
      }
      
    }
    else{
      alert("Form is not valid")
    }
    
  }
    
}
