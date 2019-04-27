/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import * as Lightbox from 'lightgallery';
/** @type {?} */
const lightgell = Lightbox;
export class GocodeeLightboxComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.images);
        lightgell(this.lightbox.nativeElement);
    }
}
GocodeeLightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gocodee-lightbox',
                template: `
  <div #lightgallery>
    <a href="image.image" *ngFor="let image of images">
      <img src="image.thumbnail" />{{image.thumbnail}}
    </a>
  </div>
  `
            }] }
];
/** @nocollapse */
GocodeeLightboxComponent.ctorParameters = () => [];
GocodeeLightboxComponent.propDecorators = {
    lightbox: [{ type: ViewChild, args: ['lightgallery',] }],
    images: [{ type: Input, args: ['images',] }]
};
if (false) {
    /** @type {?} */
    GocodeeLightboxComponent.prototype.lightbox;
    /** @type {?} */
    GocodeeLightboxComponent.prototype.images;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxRQUFRLE1BQU0sY0FBYyxDQUFDOztNQUNuQyxTQUFTLEdBQUcsUUFBUTtBQVkxQixNQUFNLE9BQU8sd0JBQXdCO0lBR25DO0lBRUEsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUV6QyxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7YUFFRjs7Ozs7dUJBRUUsU0FBUyxTQUFDLGNBQWM7cUJBQ3hCLEtBQUssU0FBQyxRQUFROzs7O0lBRGYsNENBQWdEOztJQUNoRCwwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgTGlnaHRib3ggZnJvbSAnbGlnaHRnYWxsZXJ5JztcbmNvbnN0IGxpZ2h0Z2VsbCA9IExpZ2h0Ym94O1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdvY29kZWUtbGlnaHRib3gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNsaWdodGdhbGxlcnk+XG4gICAgPGEgaHJlZj1cImltYWdlLmltYWdlXCIgKm5nRm9yPVwibGV0IGltYWdlIG9mIGltYWdlc1wiPlxuICAgICAgPGltZyBzcmM9XCJpbWFnZS50aHVtYm5haWxcIiAvPnt7aW1hZ2UudGh1bWJuYWlsfX1cbiAgICA8L2E+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdvY29kZWVMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2xpZ2h0Z2FsbGVyeScpIGxpZ2h0Ym94OiBFbGVtZW50UmVmO1xuICBASW5wdXQoJ2ltYWdlcycpIGltYWdlczogYW55O1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuaW1hZ2VzKTtcbiAgICBsaWdodGdlbGwodGhpcy5saWdodGJveC5uYXRpdmVFbGVtZW50KTtcblxuICB9XG5cbn1cbiJdfQ==