import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { FotoServiceService } from 'src/app/foto-service.service';
import { Foto } from 'src/app/camera/foto.model';

@Component({
  selector: 'app-grid-fotos',
  templateUrl: './grid-fotos.page.html',
  styleUrls: ['./grid-fotos.page.scss'],
})
export class GridFotosPage implements OnInit, OnChanges {

  //Arreglo de fotos tomadas a mostrar
  @Input() fotos: Foto[] = [];  

  constructor(    
    public _fotoService: FotoServiceService,    
  ) { }

  ngOnInit() {        
  }

  ngOnChanges(changes: SimpleChanges){
    this.getStoredPhotos();    
  }

  ionViewWillEnter(){
    console.log(this.fotos);
  }
  
  getStoredPhotos() {
    this.fotos = this._fotoService.getStoredPhotos();
  }

}
