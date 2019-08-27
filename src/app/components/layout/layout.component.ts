import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  

  @Output() setProgress: EventEmitter<any> = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

  emitProgress( event ) {
    this.setProgress.emit(event);
    console.log(event);
  }

}
