import { Component, OnInit } from '@angular/core'; // Importa solo Component y OnInit
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Usuario } from 'src/app/modelo/usuario.model';
import { UtilidadesService } from 'src/app/services/utilidades.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  form = new FormGroup({
    uid: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required, Validators.minLength(4)]), //minimo 4 caracteres
  });

  // Inyecta el servicio de firebase correctamente
  constructor(private firebaseSvc: FirebaseService, private utilidadesSvc: UtilidadesService) {}

  ngOnInit() {
  }

  // Toma por consola los valores (asíncrona async)
  async submit() {

    const carga = await this.utilidadesSvc.loading();
    await carga.present();

    this.firebaseSvc.signUp(this.form.value as Usuario).then(async res => {
      await this.firebaseSvc.updateUser(this.form.value.name);

      let uid = res.user.uid;
      this.form.controls.uid.setValue(uid);

      this.setUserInfo(uid);


    }).catch(error => {
      console.log(error);

      this.utilidadesSvc.presentToast({
        message: error.message,
        duration: 2500,   // dos segundos y medio
        color: 'primary',
        position: 'middle',
        icon: 'aler-circle-outline'
      });

    }).finally(() => {
      carga.dismiss();
    });
  }


  async setUserInfo(uid: string) {

    const carga = await this.utilidadesSvc.loading();
    await carga.present();

    let path = `users/${uid}`
    delete this.form.value.password;

    this.firebaseSvc.setDocument(path,this.form.value).then(async res => {
     this.utilidadesSvc.saveInLocalStorage('user',this.form.value)
      this.utilidadesSvc.routerLink('/main/home');
      this.form.reset();

    }).catch(error => {
      console.log(error);

      this.utilidadesSvc.presentToast({
        message: error.message,
        duration: 2500,   // dos segundos y medio
        color: 'primary',
        position: 'middle',
        icon: 'aler-circle-outline'
      });

    }).finally(() => {
      carga.dismiss();
    });
  }



}
