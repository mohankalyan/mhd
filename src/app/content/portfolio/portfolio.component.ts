import { PortfolioService } from './../../services/content/portfolio.service';
import { Portfolio } from './portfolio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(private portfolioService:PortfolioService) { }
  private portfolioList:Portfolio[]= this.portfolioService.portfolioList;
  openImage:boolean;
  ngOnInit() {
  }

  openSlideShow(){
  this.openImage= true;
  }
  closeSlideShow(isClosed:boolean){
    this.openImage =!isClosed;
  }
}
