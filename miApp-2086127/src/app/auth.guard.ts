import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {
    
    constructor(private _router: Router) {        
    }

    //Metodo que llama el canActivate de app-routing.module.ts 
    //cuando se cambiara de ruta 
    canActivate(){

        //Se obtiene el valor de isAuth guardado en localstorage
        let isAuth = localStorage.getItem('isAuth');        
        
        //Si es true es que si esta logeado y se retorna true al canActivate
        if (isAuth) {
            return true;
        }else{
            //Caso contrario redireccionar al login y retornar un false al canActivate
            this._router.navigate(['/login']);
            return false;
        }
        
    }
}
