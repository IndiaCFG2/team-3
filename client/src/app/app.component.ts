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
      apiKey: "AIzaSyAaUPOugUpE54lTHnLBu-r3Tb8o2eYwMiM",
      authDomain: "imagestorer-9e996.firebaseapp.com",
      databaseURL: "https://imagestorer-9e996.firebaseio.com",
      projectId: "imagestorer-9e996",
      storageBucket: "imagestorer-9e996.appspot.com",
      messagingSenderId: "292156459378",
      appId: "1:292156459378:web:cc74d08702dee80854f5eb",
      measurementId: "G-C8XTPD9WVL"
    }
    firebase.initializeApp(firebaseConfig);
  }
}
