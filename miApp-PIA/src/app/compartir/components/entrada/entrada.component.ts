import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-entrada',
  templateUrl: './entrada.component.html',
  styleUrls: ['./entrada.component.scss'],
})
export class EntradaComponent  implements OnInit {

  @Input () control!: FormControl;
  @Input () type!: string;
  @Input () label!: string;
  @Input () autocompletado!: string;
  @Input () icon!: string;

  isPassword!:boolean;
  hide: boolean = true;

  constructor() { }

  ngOnInit() {
    if (this.type == 'password') this.isPassword = true;
  }

  //ocultar o mostrar contraseña 
   MostrarContrasena(){
    this.hide =!this.hide;
    if(this.hide) this.type ='password'
    else this.type ='text';
  }

}
