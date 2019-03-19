import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  contact:any={
    emailAddress:"",
    name:"",
    phone:"",
    message:""
  };
 // section;
  sections = {};
  
  constructor() { }

  ngOnInit() {
    var section = document.querySelectorAll(".section");
    setTimeout(()=>{
      section.forEach((e)=>{
        console.log(e);
        this.sections[e.id] = (<HTMLInputElement>e).offsetTop;
      },this);
  
    },0);
  }




  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    for (let i in this.sections) {
      if (this.sections[i] < scrollPosition) {
        document.querySelector('.nav-active').setAttribute('class', ' ');
        document.querySelector('a[href*=' + i + ']').setAttribute('class', 'nav-active');
      }
    }
  }

  // @Output()
  // scrollSelection = new EventEmitter<string>();


  // onSectionChange(sectionId: string) {
  //   console.log('selection change='+sectionId);
  //   this.scrollSelection.emit(sectionId);
    
  // }

  // changeMenu(event){
  //   console.log('*'+event);
  // }


}

