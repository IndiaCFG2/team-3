import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { HighchartsChartModule } from 'highcharts-angular'
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  isloading: boolean = false;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      //data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      data :[],
      type: 'line'
    }]
  };

  constructor(private ar: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.isloading = true;

    this.ar.paramMap.subscribe((paramvalue)=>{
      const id = paramvalue.get('id');

      this.http.get('http://localhost:5000/lessons/getdetailedlesson/'+ id).subscribe((response)=>{
        this.isloading = false;
        this.chartOptions.series[0]['data'] = response['data']['days'];
      })

    })

  }

}
