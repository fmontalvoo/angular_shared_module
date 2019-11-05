import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleUsuarioComponent } from './component/detalle-usuario.component';

const routes: Routes = [
  {
    path: ':id',
    component: DetalleUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleUsuarioRoutingModule { }
