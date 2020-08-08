import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { SchoolsPagesComponent } from './schools-pages/schools-pages.component';
import appRoutes from './routes';

=======
import { LessonComponent } from './lesson/lesson.component';
>>>>>>> 93257501703b954d580864c3520b83e46e3c99b1

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    SchoolsPagesComponent,
=======
    LessonComponent,
>>>>>>> 93257501703b954d580864c3520b83e46e3c99b1
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
