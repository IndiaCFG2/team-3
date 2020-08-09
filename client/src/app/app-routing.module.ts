import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
import { ViewdetailedComponent } from './viewdetailed/viewdetailed.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'lessons', component: LessonComponent},
  {path: 'school', component: SchoolPagesComponent},
  {path: 'detailedlesson/:lessonid', component: ViewdetailedComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
