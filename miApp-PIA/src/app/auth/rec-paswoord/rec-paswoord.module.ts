import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecPaswoordPageRoutingModule } from './rec-paswoord-routing.module';

import { RecPaswoordPage } from './rec-paswoord.page';
import { CompartirModule } from 'src/app/compartir/compartir.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecPaswoordPageRoutingModule,
    CompartirModule
  ],
  declarations: [RecPaswoordPage]
})
export class RecPaswoordPageModule {}
