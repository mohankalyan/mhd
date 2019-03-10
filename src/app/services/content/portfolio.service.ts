import { Portfolio } from './../../content/portfolio/portfolio.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  portfolioList:Portfolio[]=[
    new Portfolio('1','Architecture','Residence','../../assets/images/portfolio/1.jpg'),
    new Portfolio('2','Architecture','Residence','../../assets/images/portfolio/2.jpg'),
    new Portfolio('3','Architecture','Apartments','../../assets/images/portfolio/3.jpg'),
    new Portfolio('4','Urban Planning','Sagar Nagar Beachfront development','../../assets/images/portfolio/4.jpg'),
    new Portfolio('5','Urban Planning','Sagar Nagar Beachfront development','../../assets/images/portfolio/5.jpg'),
    new Portfolio('6','Urban Planning','Sagar Nagar Beachfront development','../../assets/images/portfolio/6.jpg'),
    new Portfolio('7','Urban Planning','Rushikonda Beachfront development','../../assets/images/portfolio/7.jpg'),
    new Portfolio('8','Urban Planning','Rushikonda Beachfront development','../../assets/images/portfolio/8.jpg'),
    new Portfolio('9','Urban Planning','Rushikonda Beachfront development','../../assets/images/portfolio/9.jpg'),
    new Portfolio('10','Urban Planning','Site Plan','../../assets/images/portfolio/10.jpg'),
    new Portfolio('11','Architecture','Apartments','../../assets/images/portfolio/11.jpg'),
    new Portfolio('12','Urban Planning','Site Plan','../../assets/images/portfolio/12.jpg')
  ]
}
