import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as lightgallery from 'lightgallery';

@Component({
  selector: 'lib-gocodee-lightbox',
  template: `
  <div #lightgallery>
    <a href="image.image" *ngFor="let image of images">
      <img [src]="image.thumbnail" />
    </a>
  </div>
  `,
  styles: []
})
export class GocodeeLightboxComponent implements OnInit {
  @ViewChild('lightgallery') lightbox: ElementRef;
  @Input('images') images: any;
  constructor() {

  }

  ngOnInit() {
    lightgallery.lightGallery(this.lightbox.nativeElement)

  }

}
