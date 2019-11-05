import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';

import { CuatroCeroCuatroRoutingModule } from './cuatro-cero-cuatro-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CuatroCeroCuatroRoutingModule,
    SharedModule
  ]
})
export class CuatroCeroCuatroModule { }
