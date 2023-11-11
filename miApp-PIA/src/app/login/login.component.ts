import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  login() {
    
    if (this.username === 'usuario' && this.password === 'contrasena') {
      
      this.router.navigate(['/home']);
    } else {
      
      this.errorMessage = 'Credenciales incorrectas. Por favor, inténtalo de nuevo.';
    }
  }
}

