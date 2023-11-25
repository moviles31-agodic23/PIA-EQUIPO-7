import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilPageRoutingModule } from './perfil-routing.module';

import { PerfilPage } from './perfil.page';
import { InformacionPerfilPageModule } from './informacion-perfil/informacion-perfil.module';
import { GridFotosPageModule } from './grid-fotos/grid-fotos.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    InformacionPerfilPageModule,
    GridFotosPageModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
