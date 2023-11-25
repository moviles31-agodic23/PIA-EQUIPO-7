import { Component, OnInit } from '@angular/core';
import { FotoServiceService } from '../foto-service.service';
import { Foto } from './foto.model';


@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CamaraComponent implements OnInit {

  public fotos: Foto[] = []; 

  constructor(public photoService: FotoServiceService) { }

  ngOnInit() {
   
    this.fotos = this.photoService.fotos;
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}



