"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CardWithoutImageComponent = void 0;
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var CardWithoutImageComponent = /** @class */ (function () {
    function CardWithoutImageComponent() {
        this.id = '';
        this.title = '';
        this.firstSubtitle = '';
        this.secondSubtitle = '';
        this.clickDeleteButton = new core_2.EventEmitter();
    }
    CardWithoutImageComponent.prototype.ngOnInit = function () {
    };
    CardWithoutImageComponent.prototype.onDelete = function () {
        this.clickDeleteButton.emit(this.id);
    };
    __decorate([
        core_1.Input()
    ], CardWithoutImageComponent.prototype, "id");
    __decorate([
        core_1.Input()
    ], CardWithoutImageComponent.prototype, "title");
    __decorate([
        core_1.Input()
    ], CardWithoutImageComponent.prototype, "firstSubtitle");
    __decorate([
        core_1.Input()
    ], CardWithoutImageComponent.prototype, "secondSubtitle");
    __decorate([
        core_1.Output()
    ], CardWithoutImageComponent.prototype, "clickDeleteButton");
    __decorate([
        core_1.Output()
    ], CardWithoutImageComponent.prototype, "onDelete");
    CardWithoutImageComponent = __decorate([
        core_1.Component({
            selector: 'app-card-without-image',
            templateUrl: './card-without-image.component.html',
            styleUrls: ['./card-without-image.component.scss']
        })
    ], CardWithoutImageComponent);
    return CardWithoutImageComponent;
}());
exports.CardWithoutImageComponent = CardWithoutImageComponent;
