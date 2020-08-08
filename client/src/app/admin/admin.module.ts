import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MatCardModule, MatInputModule, MatButtonModule,MatMenuModule, MatSelectModule, MatProgressSpinnerModule } from '@angular/material'
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'


@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatCardModule, MatInputModule, MatButtonModule,MatMenuModule, MatSelectModule,MatProgressSpinnerModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AdminModule { }
