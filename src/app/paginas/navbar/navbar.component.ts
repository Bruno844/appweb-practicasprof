import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { AuthService } from 'src/app/services/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import {AlertasService} from '../../services/alertas.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  public islogged : boolean = false;

  public username:any = '';
  public fotoUsuario:any = '';

  constructor(private authService: AuthService, private angularAuth: AngularFireAuth, private router: Router, private alerta:AlertasService) { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        routerLink: '/inicio'
      },
      {
        label: 'Nuestro Equipo',
        routerLink: '/nuestro-equipo'
      },
      {
        label: 'Que Hacemos',

      },
      {
        label: 'Como lo hacemos',
        routerLink: '/contacto'
      },
      {
        label: 'Blogs'
      }
    ]
    this.getCurrentUser();
  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(user =>{
      if(user){
        console.log('usser logged');
        this.islogged = true;
        this.username = user.displayName;
        this.fotoUsuario = user.photoURL;
      }else{
        console.log('user NOT logged')
        this.islogged = false;
      }
    })
  }

  salirLogin(){
    this.authService.logOut().then((res)=>{
      const c = confirm('seguro que quieres salir?');
      if(c){
        this.alerta.showOutLogin('Cerraste Sesion ', 'Adios ' + this.username);
        this.router.navigate(['/registro']);
      }
    })
  }



}
