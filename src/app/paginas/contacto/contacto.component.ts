import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  contactForm!: FormGroup;

  constructor(private fb:FormBuilder) { 
    this.contactForm = fb.group({
      nombre: ['', Validators.required],
      apellido : ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log(this.contactForm.value)
    }else{
      alert('Rellena todos los campos')
    }
  }

}
