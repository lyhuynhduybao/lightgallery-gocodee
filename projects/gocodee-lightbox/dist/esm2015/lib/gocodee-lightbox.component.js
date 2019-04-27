/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import * as lightgallery from 'lightgallery';
export class GocodeeLightboxComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        lightgallery.lightGallery(this.lightbox.nativeElement);
    }
}
GocodeeLightboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-gocodee-lightbox',
                template: `
  <div #lightbox>
    <a [href]="image.image" *ngFor="let image of images">
      <img [src]="image.thumbnail" />
    </a>
  </div>
  `
            }] }
];
/** @nocollapse */
GocodeeLightboxComponent.ctorParameters = () => [];
GocodeeLightboxComponent.propDecorators = {
    lightbox: [{ type: ViewChild, args: ['lightbox',] }],
    images: [{ type: Input, args: ['images',] }]
};
if (false) {
    /** @type {?} */
    GocodeeLightboxComponent.prototype.lightbox;
    /** @type {?} */
    GocodeeLightboxComponent.prototype.images;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxZQUFZLE1BQU0sY0FBYyxDQUFDO0FBYTdDLE1BQU0sT0FBTyx3QkFBd0I7SUFHbkM7SUFFQSxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLFlBQVksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUV4RCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLFFBQVEsRUFBRTs7Ozs7O0dBTVQ7YUFFRjs7Ozs7dUJBRUUsU0FBUyxTQUFDLFVBQVU7cUJBQ3BCLEtBQUssU0FBQyxRQUFROzs7O0lBRGYsNENBQTRDOztJQUM1QywwQ0FBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgbGlnaHRnYWxsZXJ5IGZyb20gJ2xpZ2h0Z2FsbGVyeSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1nb2NvZGVlLWxpZ2h0Ym94JyxcbiAgdGVtcGxhdGU6IGBcbiAgPGRpdiAjbGlnaHRib3g+XG4gICAgPGEgW2hyZWZdPVwiaW1hZ2UuaW1hZ2VcIiAqbmdGb3I9XCJsZXQgaW1hZ2Ugb2YgaW1hZ2VzXCI+XG4gICAgICA8aW1nIFtzcmNdPVwiaW1hZ2UudGh1bWJuYWlsXCIgLz5cbiAgICA8L2E+XG4gIDwvZGl2PlxuICBgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEdvY29kZWVMaWdodGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBWaWV3Q2hpbGQoJ2xpZ2h0Ym94JykgbGlnaHRib3g6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgnaW1hZ2VzJykgaW1hZ2VzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBsaWdodGdhbGxlcnkubGlnaHRHYWxsZXJ5KHRoaXMubGlnaHRib3gubmF0aXZlRWxlbWVudClcblxuICB9XG5cbn1cbiJdfQ==