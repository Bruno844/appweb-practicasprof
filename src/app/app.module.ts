//modulos de angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//toast
import { ToastrModule } from 'ngx-toastr';

//modulos de cada componente de primeng
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';



//modulo formularios
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';


//modulo de swiper - un carrusel
import  {NgxUsefulSwiperModule}  from 'ngx-useful-swiper';

//fontAwesome
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome'


//los componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { RegistroComponent } from './paginas/registro/registro.component';
import { environment } from '../environments/environment';

//apartado de firebase con sus modulos
import { AngularFireModule } from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import {AngularFireStorageModule} from '@angular/fire/compat/storage';

//seccion de los blogs
import { BussinesAgilityComponent } from './blogs/bussines-agility/bussines-agility.component';
import { DesignThinkingComponent } from './blogs/design-thinking/design-thinking.component';
import { InnovacionComponent } from './blogs/innovacion/innovacion.component';
import { TipsLiderarEquipoComponent } from './blogs/tips-liderar-equipo/tips-liderar-equipo.component';
import { EstablecerEstrategiaEmpresarialComponent } from './blogs/establecer-estrategia-empresarial/establecer-estrategia-empresarial.component';
import { EquipoTrabajoAmenazaComponent } from './blogs/equipo-trabajo-amenaza/equipo-trabajo-amenaza.component';
import { ProfileComponent } from './paginas/profile/profile.component';
import { EquipoComponent } from './paginas/equipo/equipo.component';
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    RegistroComponent,
    BussinesAgilityComponent,
    DesignThinkingComponent,
    InnovacionComponent,
    TipsLiderarEquipoComponent,
    EstablecerEstrategiaEmpresarialComponent,
    EquipoTrabajoAmenazaComponent,
    ProfileComponent,
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-left',
      preventDuplicates: true,
    }),
    CardModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule,
    SidebarModule,
    NgxUsefulSwiperModule,
    FontAwesomeModule,
    InputTextModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
