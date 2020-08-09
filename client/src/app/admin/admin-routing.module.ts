import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AnalyticsComponent } from './analytics/analytics.component';


const routes: Routes = [
   //{path: 'admin/:id1/:id2', component: AdminComponent},
   {path: 'analytics/:id', component: AnalyticsComponent},
    {path: 'admin', component: AdminComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
