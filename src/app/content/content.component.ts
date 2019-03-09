import { Component, OnInit, Output, EventEmitter, HostListener, Directive } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Output()
  scrollSelection = new EventEmitter<string>();


  onSectionChange(sectionId: string) {
    console.log('selection change='+sectionId);
    this.scrollSelection.emit(sectionId);
    
  }

  changeMenu(event){
    console.log('*'+event);
  }

}

