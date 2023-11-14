import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { EntradaComponent } from './components/entrada/entrada.component';
import { LogoComponent } from './components/logo/logo.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CabeceraComponent,
    EntradaComponent,
    LogoComponent
  ],
  exports: [
    CabeceraComponent,
    EntradaComponent,
    ReactiveFormsModule,
    LogoComponent,
    IonicModule,
    FormsModule],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CompartirModule { }
