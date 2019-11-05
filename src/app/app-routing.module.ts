import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then(m => m.InicioModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioModule)
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/detalle-usuario/detalle-usuario.module').then(m => m.DetalleUsuarioModule)
  },
  {
    path: '404',
    loadChildren: () => import('./pages/cuatro-cero-cuatro/cuatro-cero-cuatro.module').then(m => m.CuatroCeroCuatroModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
