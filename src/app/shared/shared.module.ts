import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InicioComponent } from '../pages/inicio/component/inicio.component';
import { UsuarioComponent } from '../pages/usuario/component/usuario.component';
import { DetalleUsuarioComponent } from '../pages/detalle-usuario/component/detalle-usuario.component';
import { CuatroCeroCuatroComponent } from '../pages/cuatro-cero-cuatro/component/cuatro-cero-cuatro.component';

import { PersonasService } from '../services/personas.service';


@NgModule({
  declarations: [InicioComponent, UsuarioComponent, DetalleUsuarioComponent, CuatroCeroCuatroComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [CommonModule, FormsModule, RouterModule, InicioComponent, UsuarioComponent,
    DetalleUsuarioComponent, CuatroCeroCuatroComponent]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [PersonasService]
    };
  }
}
