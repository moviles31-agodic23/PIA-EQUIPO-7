import { Component, OnInit } from '@angular/core';
import { Foto } from '../camera/foto.model';
import { FotoServiceService } from '../foto-service.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {
  
  public fotos: Foto[] = []; 

  constructor(public photoService: FotoServiceService) { }

  ngOnInit() {   
    this.fotos = this.photoService.fotos;
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
