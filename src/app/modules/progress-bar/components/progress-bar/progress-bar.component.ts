import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {

  @Input() progress: number = 0;


  constructor() { }

  ngOnInit() {
  }

  setProgress(percent: number){
    this.progress = percent;
    console.info(percent);
  }

}
