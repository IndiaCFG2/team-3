import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase/app'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  ngOnInit(){
    const firebaseConfig ={
      // firebase config goes here
      // Please provide valid firebase config for the app to run
    }
    firebase.initializeApp(firebaseConfig);
  }
}
