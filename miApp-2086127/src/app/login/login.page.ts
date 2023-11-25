import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Variable para mostrar o no la contrasena en el input
  showPass: boolean = false;        
  
  usuario: string;
  password: string;

  usuarioCorrecto: string = "ruffles@gmail.com";
  passwordCorrecto: string = "123456";

  constructor(
    private _router: Router
  ) {
  }

  ngOnInit() {
    //Cuando se entra a la app checar si el usuario estaba logeado
    let isAuth = localStorage.getItem('isAuth');    
    if (isAuth) {
      //Si estaba logeado redireccionar al home para que no se quede en el login
      //ya que ya estaba logeado
      this._router.navigate(["/home"]);
    }
  }

  // Metodo para redireccionar al perfil si el inicio de sesion es valido
  signIn(){
    // Validar el usuario
    if (this.usuario == this.usuarioCorrecto && this.password == this.passwordCorrecto) {   
      //Limpiar el formulario
      this.usuario = null;
      this.password = null;

      //Guardar en local storage que el usuario esta logeado
      localStorage.setItem('isAuth', 'true');
      // Redireccionar al perfil      
      this._router.navigate(["/home"]);
    }
  }

}
