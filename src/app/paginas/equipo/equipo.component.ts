import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { EquipoI } from 'src/app/models/equipo.interface';
import { EquipoService } from 'src/app/services/equipo.service';
import {AlertasService} from '../../services/alertas.service';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.scss']
})
export class EquipoComponent implements OnInit {

  //aca almacenamos nuestra coleccion de los miembros del equipo
  public miembros: EquipoI[] = [];
  public filterMiembro: EquipoI[] = [];
  public searchText: string = '';
  public editar: boolean = false;
  public miembroSeleccionado?: EquipoI;
  public urlImagen: any = '';

  //imagen
  private file?: File;

  public formularioMiembro: FormGroup;
  public islogged: boolean = false;
  constructor(private fb:FormBuilder, private equipoService:EquipoService, private auth:AuthService, private alertas:AlertasService) { 
    //iniciamos el formulario,dandole que sea requerido a cada campo
    this.formularioMiembro = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      cargo: ['', Validators.required],
      url: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    //aca cuando se inicialize la app por primera vez, que traiga los modelos desde la base de datos
    this.equipoService.obtenerMiembrosEquipo().subscribe((res)=>{
      //aca ,cada miembro que lo almacene en un arreglo definido
      this.miembros = res;
      this.filterMiembro = this.miembros;
    })

    //para que el usuario pueda modificar los valores,tiene que estar logueado, para eso se verifica el estado. Si esta logueado que le muestre los botones de edit, si no no muestre nada
    this.auth.isAuth().subscribe((user)=>{
      if(user){
        this.islogged = true;
      }else{
        this.islogged = false;
      }
    })
  }

  //filtrar los del equipo
  buscarMiembro(){
   this.filterMiembro = this.miembros.filter(
      (m) =>
        m.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
        m.apellido.toLowerCase().includes(this.searchText.toLowerCase()) ||
        m.cargo.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }





  async guardarMiembro(){
    //subimos la imagen

    //aca pregunto si el formulario es valido para que suba algo
    if(!this.formularioMiembro.invalid){
      //aca pasaria, pero le preguntamos ahora si quiere editar
      if(this.editar){
        //y si lo pasa, le preguntamos si quiere subir una imagen,osea cargar algo en el file
        //y en caso que no quiera cargar nada edito el miembro del equipo sin necesidad de subir una imagen
        if(this.file ==undefined){
          this.equipoService.editarMiembro(this.miembroSeleccionado!.id, this.formularioMiembro.value).then(res =>{
            this.editar = false;
            this.alertas.showSuccess('Miembro editado con exito', 'Hecho');
            this.formularioMiembro.reset();
          })
        }

        //si el file contiene algo,entonces lo subo al storage de mi base de datos
        else{
          this.equipoService.subirImagen(this.file!, this.formularioMiembro.value, this.miembroSeleccionado!.id)
          this.miembroSeleccionado = undefined;
          this.file = undefined;
          this.formularioMiembro.reset();
        }
      }
      else{
        //Agregar Un miembro
        //llevar los datos ingresados a nuestra base de datos, osea al firestore
        this.equipoService.subirImagen(this.file!, this.formularioMiembro.value);
        this.alertas.showSuccess('Miembro agregado con exito!', 'Hecho');
        this.formularioMiembro.reset();
        this.file = undefined;
      }
    }
    else{
      alert('El formulario es invalido');
    }
  }


  //metodo que se comunica con el servicio para poder eliminar un miembro del equipo por su id

  eliminarMiembro(id: string){
    let c = confirm('estas seguro de eliminar este elemento?');
    if(c){
      this.equipoService.EliminarMiembro(id).then(res => alert('elemento eliminado con exito')
      )
    }
  }

  seleccionarMiembro(miembro: EquipoI){
    this.editar = true;
    this.miembroSeleccionado = miembro;
    const {nombre,apellido,edad,cargo,url} = miembro;

    this.formularioMiembro.setValue({
      nombre,
      apellido,
      edad,
      cargo,
      url
    })
  }

  resetFormulario(){
    this.formularioMiembro.reset();
    this.editar = false;
  }

  obtenerFile(event:any){
    this.file = event.target.files;
  }




}
