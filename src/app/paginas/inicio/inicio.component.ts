import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Swiper, SwiperOptions} from 'swiper/bundle';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/services/blog.service';
import { BlogI } from 'src/app/models/blog.interface';
import {AuthService} from 'src/app/services/auth.service'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {

  public blogColeccion: BlogI[] = [];

  public editar:boolean = false;
  public blogSeleccionado!: BlogI;

  public islogged:boolean = false;

  public formularioBlog!: FormGroup
  constructor(private fb:FormBuilder, private blogService: BlogService, private auth:AuthService) { 
    this.formularioBlog = fb.group({
      titulo: ['', Validators.required],
      descripcion1: ['', Validators.required],
      descripcion2: ['', Validators.required]
    })
  }


  //-----------------------------///
  ngAfterViewInit(): void {
      const mySwiper = new Swiper('.swiper-container',{
        //parametros opcionales
        loop: true,
        slidesPerView: 2,
        spaceBetween: 0,

       
        navigation:{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }

      })
  }
  //------------------------------------//

  ngOnInit(): void {
    this.blogService.obtenerBlogs().subscribe((blog)=>{
      console.log(blog);
      this.blogColeccion = blog;
    })

    this.auth.isAuth().subscribe(user=>{
      if(user){
        this.islogged = true;
      }else{
        this.islogged = false;
      }
    })
  }


  //eliminar blog
  eliminarBlog(id:string){
    const c = confirm('estas seguro de eliminarlo');
    if(c){
      this.blogService.eliminarBlog(id).then(result =>{
        alert('blog eliminado con exito')
      })
    }
  }

  seleccionarBlog(blog: BlogI){
    this.editar = true;
    this.blogSeleccionado = blog;
    const {titulo,descripcion1,descripcion2} = blog;
    this.formularioBlog.setValue({
      titulo,
      descripcion1,
      descripcion2
    })
  }

}
