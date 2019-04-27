(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('lightgallery'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gocodee-lightbox', ['exports', 'lightgallery', '@angular/core', '@angular/common'], factory) :
    (factory((global['gocodee-lightbox'] = {}),global.lightgallery,global.ng.core,global.ng.common));
}(this, (function (exports,lightgallery,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLightboxService = /** @class */ (function () {
        function GocodeeLightboxService() {
        }
        GocodeeLightboxService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GocodeeLightboxService.ctorParameters = function () { return []; };
        /** @nocollapse */ GocodeeLightboxService.ngInjectableDef = i0.defineInjectable({ factory: function GocodeeLightboxService_Factory() { return new GocodeeLightboxService(); }, token: GocodeeLightboxService, providedIn: "root" });
        return GocodeeLightboxService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'lib-gocodee-lightbox',
                        template: "\n  <div #lightgallery>\n    <a href=\"image.image\" *ngFor=\"let image of images\">\n      <img [src]=\"image.thumbnail\" />\n    </a>\n  </div>\n  "
                    }] }
        ];
        /** @nocollapse */
        GocodeeLightboxComponent.ctorParameters = function () { return []; };
        GocodeeLightboxComponent.propDecorators = {
            lightbox: [{ type: i0.ViewChild, args: ['lightgallery',] }],
            images: [{ type: i0.Input, args: ['images',] }]
        };
        return GocodeeLightboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GocodeeLightboxModule = /** @class */ (function () {
        function GocodeeLightboxModule() {
        }
        GocodeeLightboxModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GocodeeLightboxComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [GocodeeLightboxComponent]
                    },] }
        ];
        return GocodeeLightboxModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GocodeeLightboxService = GocodeeLightboxService;
    exports.GocodeeLightboxComponent = GocodeeLightboxComponent;
    exports.GocodeeLightboxModule = GocodeeLightboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gocodee-lightbox.umd.js.map