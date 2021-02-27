"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserFormComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var UserFormComponent = /** @class */ (function () {
    function UserFormComponent(route, location, fb, userService) {
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.userService = userService;
        this.hide = true;
        this.hideConfirmation = true;
        this.form = this.fb.group({
            id: [null],
            name: [null, forms_1.Validators.required],
            email: [null, forms_1.Validators.required],
            username: [null, forms_1.Validators.required],
            password: [null, forms_1.Validators.required],
            passwordConfirmation: [null, forms_1.Validators.required],
            active: [true, forms_1.Validators.required],
            aproved: [true, forms_1.Validators.required],
            isAdministrator: [false, forms_1.Validators.required],
            image: ['assets/images/no-image.jpg']
        });
        this.formControls = this.form.controls;
    }
    UserFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.formControls.id.setValue(params.get('id'));
            if (_this.formControls.id.value) {
                _this.userService.getId(_this.formControls.id.value)
                    .subscribe(function (user) {
                    _this.formControls.name.setValue(user.name);
                    _this.formControls.email.setValue(user.email);
                    _this.formControls.username.setValue(user.username);
                    _this.formControls.active.setValue(user.active);
                    _this.formControls.aproved.setValue(user.aproved);
                    _this.formControls.isAdministrator.setValue(user.isAdministrator);
                    _this.formControls.image.setValue(user.image);
                });
            }
        });
    };
    UserFormComponent.prototype.onClickSubmit = function () {
        if (this.formControls.id.value) {
            this.userService.update(this.form.value)
                .subscribe(function (user) { return console.log(user); });
        }
        else {
            this.userService.create(this.form.value)
                .subscribe(function (user) { return console.log(user); });
        }
    };
    UserFormComponent.prototype.onClickCancel = function () {
        this.location.back();
    };
    UserFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-form',
            templateUrl: './user-form.component.html',
            styleUrls: ['./user-form.component.scss']
        })
    ], UserFormComponent);
    return UserFormComponent;
}());
exports.UserFormComponent = UserFormComponent;
