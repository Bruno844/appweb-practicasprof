import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import * as firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private angularAuth:AngularFireAuth, private router: Router) { 
    //funcion que escuchar el estado del autenticacion, en este caso escuchando al user
    angularAuth.authState.subscribe(user=>{
      console.log(user);
    })
  }

  //funcion de logueo, que se le pasa un user y una password
  login(user:string, pass:string){
    return this.angularAuth.signInWithEmailAndPassword(user, pass)
  }

  //funcion para que el user salga de la cuenta
  logOut(){
    return this.angularAuth.signOut()
  }

  //funcion que registre un usuario,y lo guarde en firebase
  register(user: string, pass:string){
    return this.angularAuth.createUserWithEmailAndPassword(user, pass)
  }

  verifiedEmail(){
    this.angularAuth.currentUser.then(user =>{
      if(user){
        user.sendEmailVerification();
        alert('se envio un correo de verificacion!')
      }
    })
  }

  googleAuth(){
    return this.angularAuth.signInWithPopup(new firebase.default.auth.GoogleAuthProvider());
  }

  isAuth(){
    return this.angularAuth.authState.pipe(map(auth => auth));
  }





}
