import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewdetailed',
  templateUrl: './viewdetailed.component.html',
  styleUrls: ['./viewdetailed.component.css']
})
export class ViewdetailedComponent implements OnInit {

  constructor(private ar: ActivatedRoute, private http: HttpClient) { }

  data:object;
  isloading:boolean = false;

  ngOnInit() {
    this.isloading = true;
    this.ar.paramMap.subscribe((param)=>{
      
      
      this.http.get("http://localhost:5000/lessons/getdetailedlesson/"+ param.get('lessonid') ).subscribe((result)=>{
        this.isloading = false;
        this.data = result['data'];
        console.log(result);

          let daysarray:number[] = [];
          daysarray = result['data']['days']
          console.log(daysarray);
          const presentday = (new Date()).getDate();
          const index = presentday - result['data']['createddate']
          console.log("present day=", presentday);
          console.log("index=", index);
          

          daysarray[index] = daysarray[index]== undefined? 1 : daysarray[index] = daysarray[index]+1;
          
          // for(let i=0;i<daysarray.length;i++){
          //   if(i == index){
          //     daysarray[i]++;
          //   }
          // }
          const obj={
            'timestamp': param.get('lessonid'),
            'views': this.data['views']+1,
            'days': daysarray
          }
          this.http.put("http://localhost:5000/lessons/increamentviewcount", obj).subscribe((response)=>{
        })
      })
    })
  }
}
