import { lightGallery } from 'lightgallery';
import { Injectable, Component, ViewChild, Input, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxService {
    constructor() { }
}
GocodeeLightboxService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
GocodeeLightboxService.ctorParameters = () => [];
/** @nocollapse */ GocodeeLightboxService.ngInjectableDef = defineInjectable({ factory: function GocodeeLightboxService_Factory() { return new GocodeeLightboxService(); }, token: GocodeeLightboxService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        lightGallery(this.lightbox.nativeElement);
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GocodeeLightboxModule {
}
GocodeeLightboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [GocodeeLightboxComponent],
                imports: [
                    CommonModule
                ],
                exports: [GocodeeLightboxComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GocodeeLightboxService, GocodeeLightboxComponent, GocodeeLightboxModule };

//# sourceMappingURL=gocodee-lightbox.js.map