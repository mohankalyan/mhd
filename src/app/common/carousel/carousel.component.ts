import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  slideIndex:number = 1;

  ngOnInit() {
    setInterval(()=>{
      console.log("timer called");
      this.nextSlide(1);
    },100000);
  }

  nextSlide(n){
    this.slideIndex +=n; 
    if( this.slideIndex>3){
    this.slideIndex =1; 
    }
  }

  showSlides(n){
    
  }

}
