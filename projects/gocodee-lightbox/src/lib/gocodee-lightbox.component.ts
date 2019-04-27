import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import * as Lightbox from 'lightgallery';
const lightgell = Lightbox;
@Component({
  selector: 'lib-gocodee-lightbox',
  template: `
  <div #lightgallery>
    <a href="image.image" *ngFor="let image of images">
      <img src="image.thumbnail" />{{image.thumbnail}}
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
    console.log(this.images);
    lightgell(this.lightbox.nativeElement);

  }

}
