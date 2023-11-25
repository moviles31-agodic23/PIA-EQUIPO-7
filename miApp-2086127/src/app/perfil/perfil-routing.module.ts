import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilPage
  },
  {
    path: 'informacion-perfil',
    loadChildren: () => import('./informacion-perfil/informacion-perfil.module').then( m => m.InformacionPerfilPageModule)
  },
  {
    path: 'grid-fotos',
    loadChildren: () => import('./grid-fotos/grid-fotos.module').then( m => m.GridFotosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilPageRoutingModule {}
