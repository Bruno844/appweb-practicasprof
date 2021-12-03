import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  constructor(private authService:AuthService , private route: Router) { }

  ngOnInit(): void {
  }

  //usamos la funcion del service para implementar la funcion
  async login(user:string, pass:string){
    try{
      await this.authService.login(user, pass);
      this.route.navigate(['/inicio'])
    }catch(err:any){
      alert(err.message)
    }
  }

  logOut(){
    return this.authService.logOut();
  }
  
  //aca lo mismo
  async register(user:string , pass:string){
    try{
      await this.authService.register(user, pass)
      this.authService.verifiedEmail();
    }catch(err:any){
      alert(err.message)
    }
  }

  iniciarConGoogle(): void{
    this.authService.googleAuth()
    .then((res) => {
      this.route.navigate(['/inicio']);
    }).catch(err => console.log(err));

    
  }
    
}


