import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { GocodeeLightboxModule } from 'gocodee-lightbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    GocodeeLightboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
