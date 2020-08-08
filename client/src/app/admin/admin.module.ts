import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCardModule, MatInputModule, MatButtonModule,MatMenuModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material'
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AnalyticsComponent } from './analytics/analytics.component'
import { HighchartsChartModule } from 'highcharts-angular'


@NgModule({
  declarations: [AdminComponent, AnalyticsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule, MatInputModule, MatButtonModule,MatMenuModule, MatSelectModule,MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule,
    HighchartsChartModule
    
  ]
})
export class AdminModule { }
