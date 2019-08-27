import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routes';

// components
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';

// modulos

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
