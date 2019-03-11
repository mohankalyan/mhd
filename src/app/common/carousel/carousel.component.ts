import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit,OnDestroy {

  constructor() { }
  slideIndex:number = 1;
  timer;
  ngOnInit() {
    this.timer=setInterval(()=>{
      //console.log("timer called");
      this.nextSlide(1);
    },7000);
  }
  ngOnDestroy(){
    clearInterval(this.timer);
  }

  nextSlide(n){ 
    this.slideIndex +=n; 
    if( this.slideIndex>3){
    this.slideIndex =1; 
    }else if(this.slideIndex==0){
      this.slideIndex=3;
    }
  }

  showSlides(n){
    
  }

}
