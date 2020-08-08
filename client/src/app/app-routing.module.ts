import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { pathToFileURL } from 'url';
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';

const routes: Routes = [
{ path:'lessons', component: LessonComponent },
{ path:'school',component: SchoolPagesComponent}
=======
import { LessonComponent } from './lesson/lesson.component';
import { SchoolPagesComponent } from './school-pages/school-pages.component';


const routes: Routes = [
  {path: 'lessons', component: LessonComponent},
  {path: 'school', component: SchoolPagesComponent}
>>>>>>> 2f6e173737183d45879c1ca9e12cd2e0d299c18e
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
