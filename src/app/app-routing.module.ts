import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinesAgilityComponent } from './blogs/bussines-agility/bussines-agility.component';
import { DesignThinkingComponent } from './blogs/design-thinking/design-thinking.component';
import { EquipoTrabajoAmenazaComponent } from './blogs/equipo-trabajo-amenaza/equipo-trabajo-amenaza.component';
import { EstablecerEstrategiaEmpresarialComponent } from './blogs/establecer-estrategia-empresarial/establecer-estrategia-empresarial.component';
import { InnovacionComponent } from './blogs/innovacion/innovacion.component';
import { TipsLiderarEquipoComponent } from './blogs/tips-liderar-equipo/tips-liderar-equipo.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ProfileComponent } from './paginas/profile/profile.component';
import { RegistroComponent } from './paginas/registro/registro.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "inicio",
    pathMatch: 'full'
  },
  {
    path: "inicio" , component:InicioComponent
  },
  {
    path: 'inicio/:id/que-hacemos', component: InicioComponent, pathMatch:'full'
  },
  {
    path: "footer" , component: FooterComponent
  },
  {
    path: "contacto" , component: ContactoComponent
  },
  {
    path: "registro" , component: RegistroComponent
  },
  {
    path: "perfil" , component: ProfileComponent
  },
  {
    path: "inicio/bussines-agility" , component: BussinesAgilityComponent
  },
  {
    path: "inicio/design-thinking" , component: DesignThinkingComponent
  },
  {
    path: "inicio/equipo-trabajo-bajo-amenaza" , component: EquipoTrabajoAmenazaComponent
  },
  {
    path: "inicio/establecer-estrategia-empresarial" , component: EstablecerEstrategiaEmpresarialComponent
  },
  {
    path: "inicio/innovacion", component:InnovacionComponent
  },
  {
    path: "inicio/tips-liderar-equipo" , component: TipsLiderarEquipoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
