import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../camera/foto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  showHeart: boolean = false; //muestra el corazon, que en un inicio esta en falso, por eso lo muestra negro
  public fotos: Foto[] = []; //arreglo de las fotos

  constructor(
    public _fotoService: FotoServiceService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){ //ciclo de vida de ionic
    this.getStoredPhotos();
  }

  getStoredPhotos() {
    this.fotos = this._fotoService.getStoredPhotos(); //todas las fotos que se guardaron las trae y las guarda en la variable fotos
  }

}
