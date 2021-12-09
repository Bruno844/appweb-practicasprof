import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(private toast: ToastrService) { }


  showSuccess(texto:string, titulo:string){
    this.toast.success(texto, titulo);
  }

  showError(titulo:string){
    this.toast.error(titulo);
  }

  showOutLogin(texto:string, titulo:string){
    this.toast.info(texto, titulo);
  }
}
