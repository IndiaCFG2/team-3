import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalserviceService {

  constructor() { }
  private header:string;
  private message:string;
  write(h,m){
    this.header=h;
    this.message =m;
  }
  getheader(){
    return this.header
  }
  getmessage(){
    return this.message
  }
}
