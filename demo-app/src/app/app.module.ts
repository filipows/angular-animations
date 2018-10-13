import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AngularImgComponent } from './angular-img/angular-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularImgComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
