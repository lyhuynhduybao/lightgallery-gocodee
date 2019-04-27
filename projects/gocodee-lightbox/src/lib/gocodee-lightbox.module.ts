import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GocodeeLightboxComponent } from './gocodee-lightbox.component';

@NgModule({
  declarations: [GocodeeLightboxComponent ],
  imports: [
    CommonModule
  ],
  exports: [GocodeeLightboxComponent]
})
export class GocodeeLightboxModule { }
