"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FooterFormActionsComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var FooterFormActionsComponent = /** @class */ (function () {
    function FooterFormActionsComponent() {
        this.marginRight = '16';
        this.showSubmitButton = true;
        this.showCancelButton = true;
        this.submitClick = new core_2.EventEmitter();
        this.cancelClick = new core_2.EventEmitter();
    }
    FooterFormActionsComponent.prototype.ngOnInit = function () { };
    __decorate([
        core_1.Input()
    ], FooterFormActionsComponent.prototype, "marginRight");
    __decorate([
        core_1.Input()
    ], FooterFormActionsComponent.prototype, "showSubmitButton");
    __decorate([
        core_1.Input()
    ], FooterFormActionsComponent.prototype, "showCancelButton");
    __decorate([
        core_1.Output()
    ], FooterFormActionsComponent.prototype, "submitClick");
    __decorate([
        core_1.Output()
    ], FooterFormActionsComponent.prototype, "cancelClick");
    FooterFormActionsComponent = __decorate([
        core_1.Component({
            selector: 'app-footer-form-actions',
            templateUrl: './footer-form-actions.component.html',
            styleUrls: ['./footer-form-actions.component.scss']
        })
    ], FooterFormActionsComponent);
    return FooterFormActionsComponent;
}());
exports.FooterFormActionsComponent = FooterFormActionsComponent;
