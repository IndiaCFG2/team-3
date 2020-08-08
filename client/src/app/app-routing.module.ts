import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { LessonComponent } from './lesson/lesson.component';

<<<<<<< HEAD
const routes: Routes = [];
=======

const routes: Routes = [
{ path:'lessons', component: LessonComponent }
];
>>>>>>> 93257501703b954d580864c3520b83e46e3c99b1

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
