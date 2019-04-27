/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import * as Lightbox from 'lightgallery';
/** @type {?} */
var lightgell = Lightbox;
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
        console.log(this.images);
        lightgell(this.lightbox.nativeElement);
    };
    GocodeeLightboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-gocodee-lightbox',
                    template: "\n  <div #lightgallery>\n    <a href=\"image.image\" *ngFor=\"let image of images\">\n      <img src=\"image.thumbnail\" />{{image.thumbnail}}\n    </a>\n  </div>\n  "
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29jb2RlZS1saWdodGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nb2NvZGVlLWxpZ2h0Ym94LyIsInNvdXJjZXMiOlsibGliL2dvY29kZWUtbGlnaHRib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sS0FBSyxRQUFRLE1BQU0sY0FBYyxDQUFDOztJQUNuQyxTQUFTLEdBQUcsUUFBUTtBQUMxQjtJQWNFO0lBRUEsQ0FBQzs7OztJQUVELDJDQUFROzs7SUFBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3pCLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXpDLENBQUM7O2dCQXRCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLHdLQU1UO2lCQUVGOzs7OzsyQkFFRSxTQUFTLFNBQUMsY0FBYzt5QkFDeEIsS0FBSyxTQUFDLFFBQVE7O0lBV2pCLCtCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0FiWSx3QkFBd0I7OztJQUNuQyw0Q0FBZ0Q7O0lBQ2hELDBDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBMaWdodGJveCBmcm9tICdsaWdodGdhbGxlcnknO1xuY29uc3QgbGlnaHRnZWxsID0gTGlnaHRib3g7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItZ29jb2RlZS1saWdodGJveCcsXG4gIHRlbXBsYXRlOiBgXG4gIDxkaXYgI2xpZ2h0Z2FsbGVyeT5cbiAgICA8YSBocmVmPVwiaW1hZ2UuaW1hZ2VcIiAqbmdGb3I9XCJsZXQgaW1hZ2Ugb2YgaW1hZ2VzXCI+XG4gICAgICA8aW1nIHNyYz1cImltYWdlLnRodW1ibmFpbFwiIC8+e3tpbWFnZS50aHVtYm5haWx9fVxuICAgIDwvYT5cbiAgPC9kaXY+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgR29jb2RlZUxpZ2h0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZCgnbGlnaHRnYWxsZXJ5JykgbGlnaHRib3g6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgnaW1hZ2VzJykgaW1hZ2VzOiBhbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIFxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5pbWFnZXMpO1xuICAgIGxpZ2h0Z2VsbCh0aGlzLmxpZ2h0Ym94Lm5hdGl2ZUVsZW1lbnQpO1xuXG4gIH1cblxufVxuIl19