import { PortfolioService } from './../../services/content/portfolio.service';
import { Portfolio } from './portfolio.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor(public portfolioService:PortfolioService) { }
  public portfolioList:Portfolio[]= this.portfolioService.portfolioList;
  selectedImg:Portfolio;
  openImage:boolean;
  ngOnInit() {
  }

  openSlideShow(portfolio:Portfolio){
  this.openImage= true;
  this.selectedImg=portfolio;
  }
  closeSlideShow(isClosed:boolean){
    this.openImage =!isClosed;
  }
}
