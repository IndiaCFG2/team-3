import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { FormsModule} from '@angular/forms'
import { MatCardModule  } from '@angular/material/card'
import { MatInputModule  } from '@angular/material/input'



@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatCardModule,
    MatInputModule
  ]
})
export class AdminModule { }
