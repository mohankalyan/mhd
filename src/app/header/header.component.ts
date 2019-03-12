import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  expandMenu:boolean=true;
  currentSection='home';

  constructor() { }

  public innerWidth: any;
  ngOnInit() {
      this.setExpandMenu(window.innerWidth);
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.setExpandMenu(window.innerWidth);
  }

  setExpandMenu(width){
    if(width<768)
      this.expandMenu=false;
    else
      this.expandMenu=true;
  }

  isActive(id){
    return this.currentSection === id;
  }
  
  @HostListener('window:click', ['$event'])
  onClick(event) {
    if(event.target.tagName.toLowerCase()==="a"){
      this.expandMenu=false;
    }
  }

}
