import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GridFotosPage } from './grid-fotos.page';

const routes: Routes = [
  {
    path: '',
    component: GridFotosPage
  },
  // {
  //   path: 'foto',
  //   loadChildren: () => import('./foto/foto.module').then( m => m.FotoPageModule)
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GridFotosPageRoutingModule {}
