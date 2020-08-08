import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardModuleRoutingModule } from './dashboard-module-routing.module';
import { DashboardModuleComponent } from './dashboard-module.component';
import { ViewregisteredschoolsComponent } from './viewregisteredschools/viewregisteredschools.component';


@NgModule({
  declarations: [DashboardModuleComponent, ViewregisteredschoolsComponent],
  imports: [
    CommonModule,
    DashboardModuleRoutingModule
  ]
})
export class DashboardModuleModule { }
