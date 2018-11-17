import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { AngularImgComponent } from './angular-img/angular-img.component';
import { DemoOnEnterOnLeaveComponent } from './demo-on-enter-on-leave/demo-on-enter-on-leave.component';
import { AppRoutingModule } from './app-routing.module';
import { DemoMainComponent } from './demo-main/demo-main.component';
import { ExperimentsComponent } from './experiments/experiments.component';
import { DemoDynamicParamsComponent } from './demo-dynamic-params/demo-dynamic-params.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularImgComponent,
    DemoOnEnterOnLeaveComponent,
    DemoMainComponent,
    ExperimentsComponent,
    DemoDynamicParamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
