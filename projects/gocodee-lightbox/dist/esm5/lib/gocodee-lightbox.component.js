/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import * as lightgallery from 'lightgallery';
var GocodeeLightboxComponent = /** @class */ (function () {
    function GocodeeLightboxComponent() {
    }
    /**
     * @return {?}
     */
    GocodeeLightboxComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        lightgallery.lightGallery(this.lightbox.nativeElement);
    };
    GocodeeLightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gocodee-lightbox',
                    template: "\n  <div #lightgallery>\n    <a href=\"image.image\" *ngFor=\"let image of images\">\n      <img [src]=\"image.thumbnail\" />\n    </a>\n  </div>\n  "
                }] }
    ];
    /** @nocollapse */
    GocodeeLightboxComponent.ctorParameters = function () { return []; };
    GocodeeLightboxComponent.propDecorators = {
        lightbox: [{ type: ViewChild, args: ['lightgallery',] }],
        images: [{ type: Input, args: ['images',] }]
    };
    return GocodeeLightboxComponent;
}());
export { GocodeeLightboxComponent };
if (false) {
    /** @type {?} */
    GocodeeLightboxComponent.prototype.lightbox;
    /** @type {?} */
    GocodeeLightboxComponent.prototype.images;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxZQUFZLE1BQU0sY0FBYyxDQUFDO0FBRTdDO0lBY0U7SUFFQSxDQUFDOzs7O0lBRUQsMkNBQVE7OztJQUFSO1FBQ0UsWUFBWSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFBO0lBRXhELENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHVKQU1UO2lCQUVGOzs7OzsyQkFFRSxTQUFTLFNBQUMsY0FBYzt5QkFDeEIsS0FBSyxTQUFDLFFBQVE7O0lBVWpCLCtCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FaWSx3QkFBd0I7OztJQUNuQyw0Q0FBZ0Q7O0lBQ2hELDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBsaWdodGdhbGxlcnkgZnJvbSAnbGlnaHRnYWxsZXJ5JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWdvY29kZWUtbGlnaHRib3gnLFxuICB0ZW1wbGF0ZTogYFxuICA8ZGl2ICNsaWdodGdhbGxlcnk+XG4gICAgPGEgaHJlZj1cImltYWdlLmltYWdlXCIgKm5nRm9yPVwibGV0IGltYWdlIG9mIGltYWdlc1wiPlxuICAgICAgPGltZyBbc3JjXT1cImltYWdlLnRodW1ibmFpbFwiIC8+XG4gICAgPC9hPlxuICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBHb2NvZGVlTGlnaHRib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKCdsaWdodGdhbGxlcnknKSBsaWdodGJveDogRWxlbWVudFJlZjtcbiAgQElucHV0KCdpbWFnZXMnKSBpbWFnZXM6IGFueTtcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxpZ2h0Z2FsbGVyeS5saWdodEdhbGxlcnkodGhpcy5saWdodGJveC5uYXRpdmVFbGVtZW50KVxuXG4gIH1cblxufVxuIl19