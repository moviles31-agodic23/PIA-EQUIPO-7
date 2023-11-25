import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Foto } from './camera/foto.model';
import { Platform } from '@ionic/angular';



@Injectable({
  providedIn: 'root'
})
export class FotoServiceService {

  public fotos: Foto[] = [];
  private plataforma: Platform;

  constructor(plataforma : Platform) { 
    this.plataforma = plataforma;
  }

  public async addNewToGallery() {
    try {
      let capturedPhoto;
      if (this.plataforma.is('mobileweb')) {  //simulador de web o aplicacion desde la web
        capturedPhoto = await Camera.getPhoto({
          resultType: CameraResultType.DataUrl,
          source: CameraSource.Camera,
          quality: 100
        });
      }else{
        capturedPhoto = await Camera.getPhoto({
          resultType: CameraResultType.Uri,
          source: CameraSource.Camera,
          quality: 100
        });
      }

      //si la plataforma es en web mostrar la imagen de la ruta sino mostrar el blob
      const newPhoto: Foto = {
        filepath: capturedPhoto.path,
        webViewPath: this.plataforma.is('mobileweb') ? capturedPhoto.dataUrl : capturedPhoto.webPath
      };

      this.fotos.unshift(newPhoto);
      this.savePhotoToLocalstorage(newPhoto);
    } catch (error) {
      console.error('Error al capturar la foto:', error);
    }
  }
//guarda la foto y se combierte en json
  savePhotoToLocalstorage(photo: Foto) {
    try {
      const storedPhotos = this.getStoredPhotos();
      storedPhotos.unshift(photo);
      localStorage.setItem('fotos', JSON.stringify(storedPhotos));
    } catch (error) {
      console.error('Error al guardar la foto en localStorage:', error);
    }
  }
// trae todas las fotos que se allan guardado
  getStoredPhotos(): Foto[] {
    const storedPhotosJson = localStorage.getItem('fotos');
    return storedPhotosJson ? JSON.parse(storedPhotosJson) : []; // si no hay no regresa nada
  }

}


