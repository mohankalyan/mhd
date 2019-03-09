import { PortfolioService } from './../../services/content/portfolio.service';
import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.scss']
})
export class SlideShowComponent implements OnInit,AfterViewInit {

  slideIndex=0;
  portfolioList=this.portfolioService.portfolioList;
  @Output()
  closeSlide = new EventEmitter<boolean>();
  constructor(private portfolioService:PortfolioService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(){
    this.nextSlide(1);
  }
  
  showSlides() {
    var i;
    var slides: any = document.getElementsByClassName("mySlides");
   // var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }
    else if(this.slideIndex === 0){
      this.slideIndex=slides.length;
    }
    // for (i = 0; i < dots.length; i++) {
    //   dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[this.slideIndex - 1].style.display = "block";
   // dots[this.slideIndex - 1].className += " active";
  //  setTimeout(showSlides, 5000); // Change image every 2 seconds
  }

  nextSlide(n){
    this.slideIndex+=n;
    this.showSlides();
    
  }

  closeSlideShow(element:MouseEvent){
    //console.log(element);
   if((<HTMLInputElement>element.target).tagName.toLowerCase()!="img")
    this.closeSlide.emit(true);
  }
}
