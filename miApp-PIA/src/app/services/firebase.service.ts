import { Injectable, inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Usuario } from '../modelo/usuario.model';
import { signInWithEmailAndPassword, getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'; 
import {  AngularFirestore } from '@angular/fire/compat/firestore'
import { getFirestore, setDoc, doc } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  auth = inject(AngularFireAuth);
  firestor= inject (AngularFirestore)


  //----------Autenticación----------



  //------Acceder------
  signIn(usuario: Usuario) {
    return signInWithEmailAndPassword(getAuth(), usuario.email, usuario.password); 
  }

  //--- Crear usuario
  signUp(usuario: Usuario) {
    return createUserWithEmailAndPassword(getAuth(), usuario.email, usuario.password); 
  }

  //actualizar usuario
  updateUser(displayName: string){
    return updateProfile(getAuth().currentUser, { displayName })
  }

  //base de datos

  setDocument(path: string, data:any){  //crear un nuevo documento o remplazarlo si existe
    return setDoc(doc(getFirestore(), path), data);
  }




  constructor() { }
}

