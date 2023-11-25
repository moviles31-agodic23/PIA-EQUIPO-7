import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GridFotosPageRoutingModule } from './grid-fotos-routing.module';

import { GridFotosPage } from './grid-fotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GridFotosPageRoutingModule
  ],
  exports: [GridFotosPage],
  declarations: [GridFotosPage]
})
export class GridFotosPageModule {}
