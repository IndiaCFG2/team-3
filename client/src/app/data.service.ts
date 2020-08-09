import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private filteredlessons:object[] = [];

  grade:string ='';
  subject:string ='';

  writelessons(incominglessons:object[]){
    this.filteredlessons = incominglessons;
  }

  getlessons(){
    return this.filteredlessons;
  }
}
