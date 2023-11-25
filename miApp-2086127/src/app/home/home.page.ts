import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from '../camera/foto.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  showHeart: boolean = false;
  public fotos: Foto[] = [];

  constructor(
    public _fotoService: FotoServiceService
  ) { }

  ngOnInit() {
    
  }

  ionViewWillEnter(){
    this.getStoredPhotos();
  }

  getStoredPhotos() {
    this.fotos = this._fotoService.getStoredPhotos();
  }

}
