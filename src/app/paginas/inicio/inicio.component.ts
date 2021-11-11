import { AfterViewInit, Component, OnInit } from '@angular/core';
import {Swiper, SwiperOptions} from 'swiper/bundle'




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit, AfterViewInit {


  constructor() { }
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

  ngOnInit(): void {
    
  }

}
