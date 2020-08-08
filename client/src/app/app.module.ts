import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminModule} from './admin/admin.module'
import {AngularFireModule} from 'angularfire2';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
import { LessonComponent } from './lesson/lesson.component'




@NgModule({
  declarations: [
    AppComponent,
    SchoolPagesComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AdminModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
