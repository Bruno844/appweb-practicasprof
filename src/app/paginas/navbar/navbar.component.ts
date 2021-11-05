import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Inicio',
        icon: 'pi pi-fw pi-home',
        routerLink: '/inicio'
      },
      {
        label: 'Quienes somos',
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Que hacemos',
        icon: 'pi pi-fw pi-trash'
      },
      {
        label: 'contacto',
        icon: 'pi pi-fw pi-user-edit',
        routerLink: '/contacto'
      }
    ]
  }

}
