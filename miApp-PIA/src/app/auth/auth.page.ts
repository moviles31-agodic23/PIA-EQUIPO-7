import { Component, OnInit, inject } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { FirebaseService } from '../services/firebase.service';
import { Usuario } from '../modelo/usuario.model';
import { UtilidadesService } from '../services/utilidades.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  form= new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  //injectar el servicio de firebase
 firebaqseSvc = inject(FirebaseService);
  utilidadesSvc = inject(UtilidadesService)
  ngOnInit() {
  }

  //toma por consola los valores (asincrona async)
  async submit(){

    const carga=await this.utilidadesSvc.loading();
    await carga.present();

    this.firebaqseSvc.signIn(this.form.value as Usuario).then(res => {
      console.log(res);
    }).catch(error => {
      console.log(error);

      this.utilidadesSvc.presentToast({
        message: error.message,
        duration: 2500,   //dos segundos y medio
        color: 'primary',
        position: 'middle',
        icon: 'aler-circle-outline'
      })

    }).finally(() => {
      carga.dismiss();
    })
  }

}
