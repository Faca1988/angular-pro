import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountdownComponent } from './components/countdown/countdown.component';

import { CountdouwnRoutingModule } from './countdown.routes';

@NgModule({
  declarations: [CountdownComponent],
  imports: [
    CommonModule,
    CountdouwnRoutingModule
  ]
})
export class CountdownModule { }
