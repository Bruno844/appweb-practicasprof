import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';

const routes: Routes = [
  {
    path: "inicio" , component: InicioComponent
  },
  {
    path: "footer" , component: FooterComponent
  },
  {
    path: "contacto" , component: ContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
