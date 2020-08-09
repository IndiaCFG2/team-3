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

          const obj={
            'timestamp': param.get('lessonid'),
            'views': this.data['views']+1,
            'day': (new Date()).getDate()
          }
          this.http.put("http://localhost:5000/lessons/increamentviewcount", obj).subscribe((response)=>{
          
        })
      })
    })
  }
}
