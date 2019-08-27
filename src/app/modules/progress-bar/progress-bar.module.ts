//LIBS
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// COMPONENTS
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

// ROUTES
import { ProgressBarRoutingModule } from './progress-bar.routes';

@NgModule({
  declarations: [ ProgressBarComponent ],
  imports: [
    CommonModule,
    ProgressBarRoutingModule
  ],
  exports:[
    ProgressBarRoutingModule    
  ]
})
export class ProgressBarModule { }
