import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminModule} from './admin/admin.module'
import {AngularFireModule} from 'angularfire2';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
import { LessonComponent } from './lesson/lesson.component'
import { HighchartsChartModule } from 'highcharts-angular';
import { ViewdetailedComponent } from './viewdetailed/viewdetailed.component';
import { ModalComponent } from './modal/modal.component'
import {MatDialogModule} from '@angular/material'
import { MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule } from '@angular/material';





@NgModule({
  declarations: [
    AppComponent,
    SchoolPagesComponent,

    LessonComponent,
    ViewdetailedComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    MatDialogModule,
    MatButtonModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatProgressBarModule 
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents : [ModalComponent]
})
export class AppModule { }
