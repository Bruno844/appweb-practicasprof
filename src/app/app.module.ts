import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//modulos de cada componente de primeng
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {CheckboxModule} from 'primeng/checkbox';







import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavbarComponent } from './paginas/navbar/navbar.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FooterComponent,
    ContactoComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CardModule,
    MenubarModule,
    ButtonModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
