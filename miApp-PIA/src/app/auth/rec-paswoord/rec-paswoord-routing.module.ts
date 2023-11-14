import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecPaswoordPage } from './rec-paswoord.page';

const routes: Routes = [
  {
    path: '',
    component: RecPaswoordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecPaswoordPageRoutingModule {}
