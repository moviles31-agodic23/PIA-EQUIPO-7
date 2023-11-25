import { Component, OnInit, ViewChild } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../camera/foto.model';
import { GridFotosPage } from './grid-fotos/grid-fotos.page';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  fotos: Foto[] = [];
  //changeV: any;
    
  constructor(
    public _fotoService: FotoServiceService
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.getStoredPhotos();
  }

  getStoredPhotos() {
    this.fotos = this._fotoService.getStoredPhotos();
  }

  // //Indicar que se esta entrando al perfil y mandar un cambio al componente hijo de fotos
  // changeEstatus(){
  //   this.changeV = "cambio";
  // }

}
