import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestablecerRoutingModule } from './restablecer-routing.module';
import { RestablecerComponent } from '../componentes/restablecer/restablecer.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material';

@NgModule({
  declarations: [
    RestablecerComponent
  ],
  imports: [
    CommonModule,
    RestablecerRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class RestablecerModule { }
