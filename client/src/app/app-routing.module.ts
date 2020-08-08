import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolsPagesComponent } from './schools-pages/schools-pages.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'abc', component: SchoolsPagesComponent }
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }