import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  private filteredlessons:object[] = [];

  writelessons(incominglessons:object[]){
    this.filteredlessons = incominglessons;
  }

  getlessons(){
    return this.filteredlessons;
  }
}
