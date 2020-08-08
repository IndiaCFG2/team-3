import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
=======
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdminModule} from './admin/admin.module'
import {AngularFireModule} from 'angularfire2';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
import { LessonComponent } from './lesson/lesson.component'



>>>>>>> 2f6e173737183d45879c1ca9e12cd2e0d299c18e

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    LessonComponent,
    SchoolPagesComponent,
=======
    SchoolPagesComponent,
    LessonComponent
>>>>>>> 2f6e173737183d45879c1ca9e12cd2e0d299c18e
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
