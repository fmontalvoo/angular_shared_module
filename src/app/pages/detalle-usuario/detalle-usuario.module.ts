import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleUsuarioRoutingModule } from './detalle-usuario-routing.module';
import { DetalleUsuarioComponent } from './component/detalle-usuario.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DetalleUsuarioRoutingModule,
    SharedModule
  ]
})
export class DetalleUsuarioModule { }
