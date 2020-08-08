import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';


const routes: Routes = [
  {path: 'lessons', component: LessonComponent},
  {path: 'school', component: SchoolPagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
