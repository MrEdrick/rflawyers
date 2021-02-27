"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UplaodImageComponent = void 0;
var core_1 = require("@angular/core");
var UplaodImageComponent = /** @class */ (function () {
    function UplaodImageComponent(filesService) {
        this.filesService = filesService;
        this.showImageUploadButton = false;
        this.currentImage = '';
        this.image = 'assets/images/no-image.jpg';
        this.tableName = '';
        this.tableId = '';
        this.columnName = '';
    }
    UplaodImageComponent.prototype.ngOnInit = function () {
        this.currentImage = this.image;
    };
    UplaodImageComponent.prototype.onImageClick = function () {
        this.showImageUploadButton = !this.showImageUploadButton;
    };
    UplaodImageComponent.prototype.onUploadImage = function (fileUpload) {
        fileUpload.click();
    };
    UplaodImageComponent.prototype.onChangeFile = function ($event) {
        var _this = this;
        if ($event.target.files && $event.target.files[0]) {
            var fileReader = new FileReader();
            this.selectedImageFile = $event.target.files[0];
            fileReader.onload = function (event) {
                _this.image = event.target.result;
                _this.showImageUploadButton = false;
            };
            fileReader.readAsDataURL(this.selectedImageFile);
        }
    };
    UplaodImageComponent.prototype.uploadImage = function () {
        if ((this.image === this.currentImage) || (!this.tableName) || (!this.tableId)) {
            return;
        }
        var formData = new FormData();
        formData.append('tableName', this.tableName);
        formData.append('tableId', this.tableId);
        formData.append('columnName', this.columnName);
        formData.append('type', 'image');
        formData.append('file', this.selectedImageFile);
        this.filesService.uploadImage(formData).subscribe(
        // (response) => console.log(response)
        );
    };
    __decorate([
        core_1.Input()
    ], UplaodImageComponent.prototype, "image");
    __decorate([
        core_1.Input()
    ], UplaodImageComponent.prototype, "tableName");
    __decorate([
        core_1.Input()
    ], UplaodImageComponent.prototype, "tableId");
    __decorate([
        core_1.Input()
    ], UplaodImageComponent.prototype, "columnName");
    __decorate([
        core_1.Output()
    ], UplaodImageComponent.prototype, "uploadImage");
    UplaodImageComponent = __decorate([
        core_1.Component({
            selector: 'app-uplaod-image',
            templateUrl: './uplaod-image.component.html',
            styleUrls: ['./uplaod-image.component.scss']
        })
    ], UplaodImageComponent);
    return UplaodImageComponent;
}());
exports.UplaodImageComponent = UplaodImageComponent;
