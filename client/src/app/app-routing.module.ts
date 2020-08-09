import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';
import { ViewdetailedComponent } from './viewdetailed/viewdetailed.component';


const routes: Routes = [
  {path: 'lessons', component: LessonComponent},
  {path: 'school', component: SchoolPagesComponent},
  {path: 'detailedlesson/:lessonid', component: ViewdetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
