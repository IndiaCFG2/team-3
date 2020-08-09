import { Component, OnInit } from '@angular/core';
import { ModalserviceService } from '../modalservice.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public modal: ModalserviceService) { }

  ngOnInit() {
    document.getElementById("message").innerHTML=`${this.modal.getmessage()}`
  
  }

  ngOnDestroy()
  {
    this.modal.write('','');
    
  }

  copylink(){
    var copytext = document.getElementById("message");
    document.addEventListener('copy',(e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', this.modal.getmessage() );
      e.preventDefault();
      
    });
    
    
    document.execCommand('copy');
  }

}
