(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\edrickmanoel\Desktop\edrick\rflawyers\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "1j5X":
/*!************************************************!*\
  !*** ./src/app/website/home/home.component.ts ***!
  \************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 1, vars: 0, consts: [[1, "background-home"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: [".background-home[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/background-home.png);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZC1ob21lIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWhvbWUucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "4Ohr":
/*!**********************************************************!*\
  !*** ./src/app/website/expertise/expertise.component.ts ***!
  \**********************************************************/
/*! exports provided: ExpertiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseComponent", function() { return ExpertiseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../expertise-card/expertise-card.component */ "HGKX");






function ExpertiseComponent_app_expertise_card_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-expertise-card", 5);
} if (rf & 2) {
    const expertise_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expertise", expertise_r1);
} }
const _c0 = function () { return { "padding": "4% 6%" }; };
const _c1 = function () { return { "font-size": "4.0vw" }; };
class ExpertiseComponent {
    constructor() {
        this.expertisesList = [
            "Direito Interacional",
            "Direito Aeronáutico",
            "Direito Empresarial",
            "Direito Civil",
            "Direito Eleitoral",
            "Direito Constitucional",
            "Direito Penal",
            "Direito Educacional",
            "Direito Sindical",
            "Direito do Trabalho",
            "Compliance",
            "Contencioso em Geral",
        ];
    }
    ngOnInit() { }
}
ExpertiseComponent.ɵfac = function ExpertiseComponent_Factory(t) { return new (t || ExpertiseComponent)(); };
ExpertiseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpertiseComponent, selectors: [["app-expertise"]], decls: 6, vars: 5, consts: [["fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "container"], ["fxFlex.gt-xs", "auto", "fxFlex", "grow", "fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "expertises-container", 3, "ngStyle.gt-xs"], ["fxFlex", "20", 3, "ngStyle.gt-xs"], ["fxFlex.gt-xs", "auto", "fxFlex", "grow", "fxLayout", "row wrap", "fxLayoutAlign", "space-evenly center"], ["fxFlex.gt-xs", "25", "fxFlex", "50", "fxLayout", "row wrap", "style", "height: 25%;", 3, "expertise", 4, "ngFor", "ngForOf"], ["fxFlex.gt-xs", "25", "fxFlex", "50", "fxLayout", "row wrap", 2, "height", "25%", 3, "expertise"]], template: function ExpertiseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NOSSA EXPERTISE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExpertiseComponent_app_expertise_card_5_Template, 1, 1, "app-expertise-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.expertisesList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_4__["ExpertiseCardComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 100%;\n  height: auto;\n  padding: 0px;\n}\n\n.evidences-container[_ngcontent-%COMP%] {\n  background-color: #d0d3d4;\n  padding: 0 6%;\n  color: #212322;\n}\n\n.evidences-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-style: normal;\n  font-size: 15vh;\n  text-align: center;\n  margin: 4%;\n}\n\n.evidences-container[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 4vh;\n  text-align: center;\n  margin: 0px;\n}\n\n.evidences-container[_ngcontent-%COMP%]   .evidences-cards[_ngcontent-%COMP%] {\n  text-align: center;\n  min-height: 200px;\n  justify-content: center;\n  align-items: center;\n}\n\n.expertises-container[_ngcontent-%COMP%] {\n  background-color: #212322;\n  color: #d0d3d4;\n  padding: 6vh 4vw;\n  height: auto;\n}\n\n.expertises-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-style: normal;\n  font-size: 7vh;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBlcnRpc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNJO0VBQ0ksMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDUjs7QUFFSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBUjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRFI7O0FBS0E7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFJSTtFQUNJLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFGUiIsImZpbGUiOiJleHBlcnRpc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxuLmV2aWRlbmNlcy1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDNkNDtcclxuICAgIHBhZGRpbmc6IDAgNiU7XHJcbiAgICBjb2xvcjogIzIxMjMyMjtcclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSnVsaXVzIFNhbnMgT25lXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTUuMHZoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LXNpemU6IDQuMHZoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXZpZGVuY2VzLWNhcmRzIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWluLWhlaWdodDogMjAwcHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuLmV4cGVydGlzZXMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTIzMjI7XHJcbiAgICBjb2xvcjogI2QwZDNkNDtcclxuICAgIHBhZGRpbmc6IDZ2aCA0dnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDcuMHZoO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpertiseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expertise',
                templateUrl: './expertise.component.html',
                styleUrls: ['./expertise.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5eW0":
/*!**********************************************************!*\
  !*** ./src/app/website/our-story/our-story.component.ts ***!
  \**********************************************************/
/*! exports provided: OurStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryComponent", function() { return OurStoryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function () { return { "font-size": "4.0vw" }; };
const _c1 = function () { return { "font-size": "1.8vw" }; };
class OurStoryComponent {
    constructor() { }
    ngOnInit() { }
}
OurStoryComponent.ɵfac = function OurStoryComponent_Factory(t) { return new (t || OurStoryComponent)(); };
OurStoryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OurStoryComponent, selectors: [["app-our-story"]], decls: 10, vars: 4, consts: [["fxFill", "", "fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "our-story-container"], ["fxFlex", "20", "fxLayout", "column wrap", "fxLayoutAlign", "center center", 1, "our-story-title-container"], ["fxFlex", "40", 3, "ngStyle.gt-xs"], ["fxFlex", "", "fxLayout", "row wrap", "fxLayoutAlign", "center start"], ["fxFlex", "80", "fxFlex.gt-xs", "50", 3, "ngStyle.gt-xs"]], template: function OurStoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " NOSSA HIST\u00D3RIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Rodrigues & Franceschini Advogados Associados \u00E9 sucessor de Vitor Rodrigues & Advogados Associados com atua\u00E7\u00E3o nacional e internacional. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Desde sua funda\u00E7\u00E3o o escrit\u00F3rio se diferencia pela forma artesanal como cuida dos interesses de seus clientes, com o estudo apurado da legisla\u00E7\u00E3o vigente, bem como da melhor doutrina e jurisprud\u00EAncia. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]], styles: [".our-story-container[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  background-color: #212322;\n}\n.our-story-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: 3.5vh;\n  font-weight: 100;\n  text-align: left;\n  line-height: 1.8;\n}\n.our-story-title-container[_ngcontent-%COMP%] {\n  padding: 6vh 4vw;\n}\n.our-story-title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  font-size: 7vw;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvdXItc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EseUJBQUE7QUFDSjtBQUNJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ1I7QUFHQTtFQUNJLGdCQUFBO0FBQUo7QUFFSTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFBUiIsImZpbGUiOiJvdXItc3RvcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIub3VyLXN0b3J5LWNvbnRhaW5lciAge1xyXG4gICAgY29sb3I6ICNkMGQzZDQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyMzIyO1xyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2aDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOFxyXG4gICAgfVxyXG59XHJcblxyXG4ub3VyLXN0b3J5LXRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiA2dmggNHZ3O1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNy4wdnc7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OurStoryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-our-story',
                templateUrl: './our-story.component.html',
                styleUrls: ['./our-story.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "6Svv":
/*!************************************************!*\
  !*** ./src/app/website/menu/menu.component.ts ***!
  \************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");













const _c0 = ["drawer"];
const _c1 = function (a0, a1) { return { "visible": a0, "position": a1 }; };
class MenuComponent {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.drawerOpened = false;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(result => result.matches), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])());
        this.clickMenuItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    closeNavBar() {
        this.sidenav.close();
        this.drawerOpened = false;
    }
    openNavBar() {
        if (this.drawerOpened) {
            this.sidenav.open();
        }
    }
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"])); };
MenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["app-menu"]], viewQuery: function MenuComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sidenav = _t.first);
    } }, outputs: { clickMenuItem: "clickMenuItem" }, decls: 46, vars: 9, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start start", 1, "menu"], ["fxHide", "", "fxShow.gt-xs", "", "role", "list", "fxFlex", "100", "fxLayout", "row wrap", "fxLayoutAlign", "end center", 1, "list-menu"], ["fxFlex", "20", "fxFlex.gt-sm", "10", "role", "listitem", 3, "click"], [2, "position", "relative", "width", "100%", "text-align", "center"], ["fxFlex", "20", "fxFlex.gt-sm", "10", "fxLayout", "center center", "role", "listitem", 3, "click"], ["fxHide", "", "fxShow.gt-xs", "", "role", "list", "fxFlex", "100", "fxLayout", "column wrap", "fxLayoutAlign", "start space-between", 1, "list-social-midia"], ["fxHide.gt-xs", "", "fxShow", "", "fxFlex", "100", "fxLayout", "row wrap", "fxLayoutAlign", "end center", 1, "list-social-midia", "mat-elevation-z4"], ["mat-icon-button", "", 3, "click"], [2, "flex", "1 1 auto"], ["fxHide.gt-xs", "", "fxShow", "", 3, "ngStyle", "backdropClick"], ["fixedInViewport", "", "position", "start", 1, "sidenav", 3, "mode", "opened"], ["drawer", ""], ["role", "list", "fxFlex", "100", "fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "list-menu-nav-bar"], ["fxFlex", "10", "role", "listitem", "fxLayout", "row wrap", "fxLayoutAlign", "start stretch", 3, "click"], ["fxFlex", "100", 2, "text-align", "center"], ["fxFlex", "10", "role", "listitem", "fxLayoutAlign", "start stretch", 3, "click"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-nav-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_2_listener() { return ctx.clickMenuItem.emit("#expertise"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " EXPERTISE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_5_listener() { return ctx.clickMenuItem.emit("#aboutUs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " EQUIPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_8_listener() { return ctx.clickMenuItem.emit("#ourStory"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " HIST\u00D3RIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_11_listener() { return ctx.clickMenuItem.emit("#callToAction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " AGENDAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_14_listener() { return ctx.clickMenuItem.emit("#footer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " CONTATO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-nav-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-toolbar", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](25); ctx.drawerOpened = !ctx.drawerOpened; return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-sidenav-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("backdropClick", function MenuComponent_Template_mat_sidenav_container_backdropClick_23_listener() { return ctx.closeNavBar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-sidenav", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](26, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-nav-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_28_listener() { return ctx.clickMenuItem.emit("#home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " HOME ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_31_listener() { return ctx.clickMenuItem.emit("#expertise"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " EXPERTISE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_34_listener() { return ctx.clickMenuItem.emit("#aboutUs"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " EQUIPE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_37_listener() { return ctx.clickMenuItem.emit("#ourStory"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " HIST\u00D3RIA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_40_listener() { return ctx.clickMenuItem.emit("#callToAction"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " AGENDAR ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-list-item", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponent_Template_mat_list_item_click_43_listener() { return ctx.clickMenuItem.emit("#footer"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " CONTATO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.drawerOpened, ctx.drawerOpened ? "fixed" : "unset"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "over")("opened", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("role", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](26, 4, ctx.isHandset$) ? "dialog" : "navigation");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatNavList"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_list__WEBPACK_IMPORTED_MODULE_4__["MatListItem"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: [".menu[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n\nmat-nav-list.list-menu[_ngcontent-%COMP%] {\n  margin-top: 2%;\n  padding: 0 6%;\n}\n\nmat-nav-list.list-menu[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  opacity: 0.8;\n}\n\nmat-nav-list.list-menu[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  font-weight: 600;\n}\n\nmat-nav-list.list-menu[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 1px;\n  left: 50%;\n  position: absolute;\n  background: #d0d3d4;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0px;\n}\n\nmat-nav-list.list-menu[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n\nmat-nav-list.list-social-midia[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0px;\n  right: 0px;\n  margin-bottom: 6%;\n  margin-right: 6%;\n}\n\nmat-nav-list.list-social-midia[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  text-align: center;\n  opacity: 0.8;\n}\n\nmat-nav-list.list-social-midia[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.mat-toolbar[_ngcontent-%COMP%] {\n  position: fixed;\n  background-color: #212322;\n  color: #d0d3d4;\n  z-index: 4;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  text-align: center;\n  opacity: 0.8;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  text-align: center;\n  opacity: 0.8;\n}\n\n.mat-toolbar[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(33, 35, 34, 0.3);\n  z-index: 2;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 40%;\n  height: 100%;\n  background-color: #212322;\n  padding-top: 56px;\n  z-index: 3;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%] {\n  color: #d0d3d4;\n  text-align: center;\n  opacity: 0.8;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .mat-list-item-content[_ngcontent-%COMP%] {\n  position: unset;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-sidenav-content[_ngcontent-%COMP%] {\n  -ms-overflow-style: none;\n  scrollbar-width: none;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]   .sidenav[_ngcontent-%COMP%]   .mat-toolbar.mat-primary[_ngcontent-%COMP%] {\n  position: relative;\n  top: 0;\n  z-index: 1;\n}\n\n.mat-sidenav-container[_ngcontent-%COMP%]    .mat-list-base .mat-list-item .mat-list-item-content {\n  position: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGFBQUE7QUFDSjs7QUFDSTtFQUNJLGNBQUE7RUFDQSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUVJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR0k7RUFDSSw4Q0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsVUFBQTtBQURSOztBQUlJO0VBQ0ksV0FBQTtFQUNBLE9BQUE7QUFGUjs7QUFNQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBS0k7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSFI7O0FBS1E7RUFDSSxVQUFBO0FBSFo7O0FBUUE7RUFHSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVBKOztBQVNJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVBSOztBQVNRO0VBQ0ksVUFBQTtBQVBaOztBQVdJO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQVRSOztBQVdRO0VBQ0ksVUFBQTtBQVRaOztBQWNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx1Q0FBQTtFQUNBLFVBQUE7QUFYSjs7QUFhSTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBWFI7O0FBYVE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBWFo7O0FBYVk7RUFDSSxVQUFBO0FBWGhCOztBQWVnQjtFQUNJLGVBQUE7QUFicEI7O0FBa0JRO0VBQ0ksbUJBQUE7QUFoQlo7O0FBbUJRO0VBQ0ksYUFBQTtBQWpCWjs7QUFvQlE7RUFDSSx3QkFBQTtFQUNBLHFCQUFBO0FBbEJaOztBQXFCUTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFuQlo7O0FBdUJJO0VBQ0ksZUFBQTtBQXJCUiIsImZpbGUiOiJtZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbm1hdC1uYXYtbGlzdC5saXN0LW1lbnUge1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBwYWRkaW5nOiAwIDYlO1xyXG5cclxuICAgIC5tYXQtbGlzdC1pdGVtIHtcclxuICAgICAgICBjb2xvcjogI2QwZDNkNDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXQtbGlzdC1pdGVtOmFmdGVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2QwZDNkNDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2UgMHMsIGxlZnQgMC4zcyBlYXNlIDBzO1xyXG4gICAgICAgIHdpZHRoOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1saXN0LWl0ZW06aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1uYXYtbGlzdC5saXN0LXNvY2lhbC1taWRpYSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2JTtcclxuICAgIG1hcmdpbi1yaWdodDogNiU7XHJcblxyXG4gICAgLm1hdC1saXN0LWl0ZW0ge1xyXG4gICAgICAgIGNvbG9yOiAjZDBkM2Q0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm1hdC10b29sYmFyIHtcclxuICAgIC8vYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtY2FyZC5wbmcpO1xyXG4gICAgLy9iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyMjtcclxuICAgIGNvbG9yOiAjZDBkM2Q0O1xyXG4gICAgei1pbmRleDogNDtcclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogI2QwZDNkNDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1hdC1pY29uIHtcclxuICAgICAgICBjb2xvcjogI2QwZDNkNDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMyMTIzMjIsIDAuMyk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG5cclxuICAgIC5zaWRlbmF2IHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNTZweDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG5cclxuICAgICAgICAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZDBkM2Q0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hdC10b29sYmFyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tYXQtc2lkZW5hdi1jb250ZW50IHtcclxuICAgICAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCB7XHJcbiAgICAgICAgcG9zaXRpb246IHVuc2V0O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss']
            }]
    }], function () { return [{ type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"] }]; }, { sidenav: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['drawer']
        }], clickMenuItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "7Ojj":
/*!****************************************************!*\
  !*** ./src/app/website/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../email-sender-form/email-sender.component */ "stJb");





const _c0 = function () { return { "padding": "4% 6%" }; };
const _c1 = function () { return { "font-size": "4.0vw" }; };
const _c2 = function () { return { "font-size": "4.0vh" }; };
class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 15, vars: 12, consts: [["fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "footer-container"], ["fxFlex", "70", "fxLayout", "column wrap", "fxLayoutAlign", "space-between stretch", 1, "footer-title-contact-us-container", 3, "ngStyle.gt-xs"], ["fxFlex", "20", 3, "ngStyle.gt-xs"], ["fxFlex", "70"], ["fxFlex", "30", "fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "background-footer"], ["fxFlex", "80", "fxFlex.gt-xs", "38"], [3, "ngStyle.gt-xs"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " ENTRE EM CONTATO ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-email-sender", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Av. Presidente Vargas, 542 - gr. 1.405 - Centro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Rio de Janeiro - RJ - CEP: 20071-003");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tel.: (21) 2253-3889");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Whatsapp: (21) 99768-4446");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_3__["EmailSenderComponent"]], styles: [".footer-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  height: auto;\n}\n\n.footer-title-contact-us-container[_ngcontent-%COMP%] {\n  padding: 6vh 4vw;\n  color: #212322;\n}\n\n.footer-title-contact-us-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  font-size: 6vh;\n  text-align: center;\n  line-height: 1.3;\n}\n\n.background-footer[_ngcontent-%COMP%] {\n  min-height: 400px;\n  background-image: url(/assets/images/background-footer.png);\n  background-size: cover;\n  background-position: center;\n  color: #d0d3d4;\n}\n\n.background-footer[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 300;\n  font-size: 4vh;\n  text-align: left;\n  line-height: 1.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNSOztBQUdBO0VBQ0ksaUJBQUE7RUFDQSwyREFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQUo7O0FBRUk7RUFDSSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBUiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb290ZXItdGl0bGUtY29udGFjdC11cy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNnZoIDR2dztcclxuICAgIGNvbG9yOiAjMjEyMzIyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNi4wdmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWZvb3RlciB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWZvb3Rlci5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZDBkM2Q0O1xyXG5cclxuICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNC4wdmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "7z6D":
/*!***************************************************!*\
  !*** ./src/app/website/website-routing.module.ts ***!
  \***************************************************/
/*! exports provided: WebsiteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteRoutingModule", function() { return WebsiteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./website.component */ "N09b");





const routes = [
    { path: 'index', component: _website_component__WEBPACK_IMPORTED_MODULE_2__["WebsiteComponent"] },
];
class WebsiteRoutingModule {
}
WebsiteRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebsiteRoutingModule });
WebsiteRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebsiteRoutingModule_Factory(t) { return new (t || WebsiteRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebsiteRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsiteRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "8k44":
/*!****************************************************************************!*\
  !*** ./src/app/shared-features/dialog-presenter/service/dialog.service.ts ***!
  \****************************************************************************/
/*! exports provided: DialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogService", function() { return DialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared-components/dialog/dialog.component */ "q4NH");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");







class DialogService {
    constructor(dialog) {
        this.dialog = dialog;
        this.destroy = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnDestroy() {
        this.destroy.next();
        this.destroy.complete();
    }
    showAlert(title, close) {
        const dialog = {
            title: title || 'Título',
            close: close || 'OK'
        };
        this.dialog.open(_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: 'auto', data: dialog });
    }
    showConfirmation(content, ok, close) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = {
                content: content || '',
                close: close || 'CANCELAR',
                ok: ok || 'CONFIRMAR'
            };
            const dialogRef = this.dialog.open(_shared_components_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], { width: 'auto', data: dialog });
            dialogRef
                .afterClosed()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy))
                .subscribe((result) => result);
            return yield dialogRef.afterClosed().toPromise();
        });
    }
}
DialogService.ɵfac = function DialogService_Factory(t) { return new (t || DialogService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DialogService, factory: DialogService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DialogService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "8yM/":
/*!*******************************************************************!*\
  !*** ./src/app/website/email-sender-form/email-sender.service.ts ***!
  \*******************************************************************/
/*! exports provided: EmailSenderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSenderService", function() { return EmailSenderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_const_base_backend_path_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/const/base-backend-path.const */ "iGNJ");
/* harmony import */ var src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/base.service */ "Do2H");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class EmailSenderService extends src_app_services_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseService"] {
    constructor(http) {
        super(src_app_common_const_base_backend_path_const__WEBPACK_IMPORTED_MODULE_1__["BASE_BACKEND_PATH"] + 'email-sender', http);
    }
    contactUs(value) {
        return super.post('contact-us', value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response;
        }));
    }
}
EmailSenderService.ɵfac = function EmailSenderService_Factory(t) { return new (t || EmailSenderService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
EmailSenderService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmailSenderService, factory: EmailSenderService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailSenderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Bl3U":
/*!*********************************************************!*\
  !*** ./src/app/common/error-handler/not-found-error.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundError", function() { return NotFoundError; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "u39C");

class NotFoundError extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "Do2H":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _common_error_handler_bad_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/error-handler/bad-input */ "GhKm");
/* harmony import */ var _common_error_handler_not_found_error__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/error-handler/not-found-error */ "Bl3U");
/* harmony import */ var _common_error_handler_app_error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/error-handler/app-error */ "u39C");
/* harmony import */ var _shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-features/dialog-presenter/service/dialog.service */ "8k44");
/* harmony import */ var _common_const_error_messages_const__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/const/error-messages.const */ "XNcg");
/* harmony import */ var _injector_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./injector.service */ "VPqC");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "qCKp");










class BaseService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
        this.dialogService = _injector_service__WEBPACK_IMPORTED_MODULE_7__["InjectorService"].injector.get(_shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]);
    }
    getId(id) {
        return this.http.get(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    getAll() {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    getWithFilter(paramsDto) {
        let httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        paramsDto.forEach((paramDto) => {
            httpParams = httpParams.append(paramDto.key, paramDto.value);
        });
        return this.http.get(this.url, { params: httpParams })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    create(resource) {
        return this.http.post(this.url, resource)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    update(resource) {
        return this.http.patch(this.url, resource)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    delete(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    get(path) {
        return this.http.get(this.url + '/' + path)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    post(path, resource, options) {
        return this.http.post(this.url + '/' + path, resource)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((response) => {
            if (response) {
                return response;
            }
            else {
                return this.handleError(response);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["catchError"])((error) => {
            return this.handleError(error);
        }));
    }
    handleError(response) {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (((_a = response === null || response === void 0 ? void 0 : response.error) === null || _a === void 0 ? void 0 : _a.method) === 'DELETE') {
                this.dialogService.showAlert(_common_const_error_messages_const__WEBPACK_IMPORTED_MODULE_6__["GENERIC_DELETE_ERROR_MESSAGE"]);
            }
            if (response.status === 400) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(new _common_error_handler_bad_input__WEBPACK_IMPORTED_MODULE_2__["BadInput"](response));
            }
            if (response.status === 404) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(new _common_error_handler_not_found_error__WEBPACK_IMPORTED_MODULE_3__["NotFoundError"]());
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["throwError"])(new _common_error_handler_app_error__WEBPACK_IMPORTED_MODULE_4__["AppError"](response));
        });
    }
}


/***/ }),

/***/ "GhKm":
/*!***************************************************!*\
  !*** ./src/app/common/error-handler/bad-input.ts ***!
  \***************************************************/
/*! exports provided: BadInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BadInput", function() { return BadInput; });
/* harmony import */ var _app_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-error */ "u39C");

class BadInput extends _app_error__WEBPACK_IMPORTED_MODULE_0__["AppError"] {
}


/***/ }),

/***/ "HGKX":
/*!********************************************************************!*\
  !*** ./src/app/website/expertise-card/expertise-card.component.ts ***!
  \********************************************************************/
/*! exports provided: ExpertiseCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseCardComponent", function() { return ExpertiseCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function () { return { "width": "5.0vw", "height": "5.0vw" }; };
const _c1 = function () { return { "font-size": "2.0vw" }; };
class ExpertiseCardComponent {
    constructor() {
        this.expertise = '';
    }
    ngOnInit() { }
}
ExpertiseCardComponent.ɵfac = function ExpertiseCardComponent_Factory(t) { return new (t || ExpertiseCardComponent)(); };
ExpertiseCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExpertiseCardComponent, selectors: [["app-expertise-card"]], inputs: { expertise: "expertise" }, decls: 4, vars: 5, consts: [["fxLayout", "column wrap", "fxLayoutAlign", "center center", 1, "card-container"], [1, "losango", 3, "ngStyle.gt-sm"], [3, "ngStyle.gt-sm"]], template: function ExpertiseCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-sm", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.expertise, " ");
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]], styles: [".card-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-width: 130px;\n  min-height: 130px;\n}\n.card-container[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 3.5vh;\n  font-style: oblique;\n  text-align: center;\n  z-index: 1;\n  opacity: 0.8;\n  margin-bottom: 0px;\n}\n.card-container[_ngcontent-%COMP%]   .losango[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7.5vh;\n  height: 7.5vh;\n  border: #005683 solid 2px;\n  opacity: 0.5;\n  transform: rotate(-45deg);\n  z-index: 0;\n  transition: all 0.3s ease;\n}\n.card-container[_ngcontent-%COMP%]:hover   .losango[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: rotate(-135deg);\n}\n.card-container[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxleHBlcnRpc2UtY2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDUjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0FBQVI7QUFLSTtFQUNJLFVBQUE7RUFDQSwwQkFBQTtBQUZSO0FBS0k7RUFDSSxVQUFBO0FBSFIiLCJmaWxlIjoiZXhwZXJ0aXNlLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTMwcHg7XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzLjV2aDtcclxuICAgICAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmxvc2FuZ28ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogNy41dmg7XHJcbiAgICAgICAgaGVpZ2h0OiA3LjV2aDtcclxuICAgICAgICBib3JkZXI6ICMwMDU2ODMgc29saWQgMnB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xyXG4gICAgICAgIHotaW5kZXg6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcclxuICAgIH1cclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyOmhvdmVyIHtcclxuICAgIC5sb3NhbmdvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGgyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExpertiseCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-expertise-card',
                templateUrl: './expertise-card.component.html',
                styleUrls: ['./expertise-card.component.scss']
            }]
    }], function () { return []; }, { expertise: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "HgVU":
/*!*******************************************!*\
  !*** ./src/app/effects/effects.module.ts ***!
  \*******************************************/
/*! exports provided: EffectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EffectsModule", function() { return EffectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _elevation_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elevation.effect */ "J2CK");




class EffectsModule {
}
EffectsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: EffectsModule });
EffectsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function EffectsModule_Factory(t) { return new (t || EffectsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EffectsModule, { declarations: [_elevation_effect__WEBPACK_IMPORTED_MODULE_2__["ElevationEffectDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_elevation_effect__WEBPACK_IMPORTED_MODULE_2__["ElevationEffectDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EffectsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _elevation_effect__WEBPACK_IMPORTED_MODULE_2__["ElevationEffectDirective"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    _elevation_effect__WEBPACK_IMPORTED_MODULE_2__["ElevationEffectDirective"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "IK8j":
/*!********************************************************************!*\
  !*** ./src/app/website/call-to-action/call-to-action.component.ts ***!
  \********************************************************************/
/*! exports provided: CallToActionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionComponent", function() { return CallToActionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _effects_elevation_effect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../effects/elevation.effect */ "J2CK");






class CallToActionComponent {
    constructor() { }
    ngOnInit() { }
}
CallToActionComponent.ɵfac = function CallToActionComponent_Factory(t) { return new (t || CallToActionComponent)(); };
CallToActionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CallToActionComponent, selectors: [["app-call-to-action"]], decls: 7, vars: 0, consts: [["fxFill", "", "fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "call-to-action-container"], ["fxFlex", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "background-call-to-action"], ["href", "https://wa.me/55021997684446", "target", "_blank", 2, "text-decoration", "none"], ["appElevationEffect", "", "fxFlex", "250px", "fxFlex.gt-xs", "400px", 1, "call-to-action-card"]], template: function CallToActionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AGENDE UMA CONSULTORIA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_3__["MatCard"], _effects_elevation_effect__WEBPACK_IMPORTED_MODULE_4__["ElevationEffectDirective"]], styles: [".call-to-action-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  height: auto;\n}\n\n.call-to-action-title-container[_ngcontent-%COMP%] {\n  padding: 6vh 4vw;\n  color: #212322;\n  width: 100%;\n  height: auto;\n}\n\n.call-to-action-title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  font-size: 6vh;\n  text-align: center;\n  line-height: 1.3;\n}\n\n.background-call-to-action[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/background-call-to-action.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-attachment: fixed;\n}\n\n.call-to-action-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  background-color: #212322;\n  color: #d0d3d4;\n  text-align: center;\n  border-radius: 0px;\n  box-shadow: #212322;\n  transition: width 0.3s ease 0s, height 0.3s ease 0s, top 0.3s ease 0s;\n}\n\n.call-to-action-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  opacity: 0.8;\n}\n\n.call-to-action-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.call-to-action-card[_ngcontent-%COMP%]:hover   h1[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-weight: 600;\n}\n\n.call-to-action-card[_ngcontent-%COMP%]:after {\n  background: none repeat scroll 0 0 transparent;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  height: 1px;\n  left: 50%;\n  position: absolute;\n  background: #d0d3d4;\n  transition: width 0.3s ease 0s, left 0.3s ease 0s;\n  width: 0px;\n}\n\n.call-to-action-card[_ngcontent-%COMP%]:hover:after {\n  width: 100%;\n  left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYWxsLXRvLWFjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0k7RUFDSSwwQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFHQTtFQUNJLG1FQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7QUFBSjs7QUFHQTtFQUNJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRUFBQTtBQUFKOztBQUdJO0VBQ0ksMENBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFEUjs7QUFJSTtFQUNJLGVBQUE7QUFGUjs7QUFJUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUZaOztBQU1JO0VBQ0ksOENBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpREFBQTtFQUNBLFVBQUE7QUFKUjs7QUFPSTtFQUNJLFdBQUE7RUFDQSxPQUFBO0FBTFIiLCJmaWxlIjoiY2FsbC10by1hY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FsbC10by1hY3Rpb24tY29udGFpbmVyICB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5jYWxsLXRvLWFjdGlvbi10aXRsZS1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogNnZoIDR2dztcclxuICAgIGNvbG9yOiAjMjEyMzIyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiA2dmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kLWNhbGwtdG8tYWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLWNhbGwtdG8tYWN0aW9uLmpwZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7IFxyXG59XHJcblxyXG4uY2FsbC10by1hY3Rpb24tY2FyZCB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxMjMyMjtcclxuICAgIGNvbG9yOiAjZDBkM2Q0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYm94LXNoYWRvdzogIzIxMjMyMjtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZSAwcywgaGVpZ2h0IDAuM3MgZWFzZSAwcyxcclxuICAgIHRvcCAwLjNzIGVhc2UgMHM7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDEuMDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZSByZXBlYXQgc2Nyb2xsIDAgMCB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNkMGQzZDQ7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlIDBzLCBsZWZ0IDAuM3MgZWFzZSAwcztcclxuICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6YWZ0ZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CallToActionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-call-to-action',
                templateUrl: './call-to-action.component.html',
                styleUrls: ['./call-to-action.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J2CK":
/*!*********************************************!*\
  !*** ./src/app/effects/elevation.effect.ts ***!
  \*********************************************/
/*! exports provided: ElevationEffectDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevationEffectDirective", function() { return ElevationEffectDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ElevationEffectDirective {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.defaultElevation = 4;
        this.raisedElevation = 16;
        this.setElevation(this.defaultElevation);
    }
    ngOnChanges(_changes) {
        this.setElevation(this.defaultElevation);
    }
    onMouseEnter() {
        this.setElevation(this.raisedElevation);
    }
    onMouseLeave() {
        this.setElevation(this.defaultElevation);
    }
    setElevation(amount) {
        const elevationPrefix = 'mat-elevation-z';
        // remove all elevation classes
        const classesToRemove = Array.from(this.element.nativeElement.classList)
            .filter(c => c.startsWith(elevationPrefix));
        classesToRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });
        // add the given elevation class
        const newClass = `${elevationPrefix}${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }
}
ElevationEffectDirective.ɵfac = function ElevationEffectDirective_Factory(t) { return new (t || ElevationEffectDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
ElevationEffectDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ElevationEffectDirective, selectors: [["", "appElevationEffect", ""]], hostBindings: function ElevationEffectDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function ElevationEffectDirective_mouseenter_HostBindingHandler() { return ctx.onMouseEnter(); })("mouseleave", function ElevationEffectDirective_mouseleave_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { defaultElevation: "defaultElevation", raisedElevation: "raisedElevation" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElevationEffectDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appElevationEffect]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { defaultElevation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], raisedElevation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onMouseEnter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseleave']
        }] }); })();


/***/ }),

/***/ "KoC3":
/*!************************************************************!*\
  !*** ./src/app/website/philosophy/philosophy.component.ts ***!
  \************************************************************/
/*! exports provided: PhilosophyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhilosophyComponent", function() { return PhilosophyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");




const _c0 = function () { return { "background-position": "-10% 10%" }; };
const _c1 = function () { return { "padding": "4% 6%" }; };
const _c2 = function () { return { "font-size": "2.0vw" }; };
class PhilosophyComponent {
    constructor() { }
    ngOnInit() { }
}
PhilosophyComponent.ɵfac = function PhilosophyComponent_Factory(t) { return new (t || PhilosophyComponent)(); };
PhilosophyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PhilosophyComponent, selectors: [["app-philosophy"]], decls: 7, vars: 8, consts: [["fxLayout", "column wrap", "fxLayoutAlign", "start stretch", 1, "philosophy-container"], ["fxFlex", "", 1, "background-philosophy", 3, "ngStyle.gt-xs"], ["fxFlex", "40", "fxLayout", "column wrap", "fxLayoutAlign", "space-between stretch", 1, "philosophy-title-container", 3, "ngStyle.gt-xs"], ["fxFlex", "40", 3, "ngStyle.gt-xs"], ["fxFlex", "20", 3, "ngStyle.gt-xs"]], template: function PhilosophyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u201CACREDITAMOS QUE CADA CASO TEM SUAS PARTICULARIDADES, POR ISSO PRECISA SER ANALIZADO ARTESANALMENTE.\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " RODRIGUES & FRANCESCHINI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"]], styles: [".philosophy-container[_ngcontent-%COMP%] {\n  background-color: #ffffff;\n  width: 100%;\n  height: auto;\n}\n\n.background-philosophy[_ngcontent-%COMP%] {\n  min-height: 400px;\n  background-image: url(/assets/images/background-philosophy.jpg);\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.philosophy-title-container[_ngcontent-%COMP%] {\n  padding: 4% 6%;\n  color: #212322;\n}\n\n.philosophy-title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  font-size: 3vh;\n  text-align: center;\n  line-height: 1.3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwaGlsb3NvcGh5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSwrREFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7QUFDSjs7QUFDSTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNSIiwiZmlsZSI6InBoaWxvc29waHkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhpbG9zb3BoeS1jb250YWluZXIgIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmJhY2tncm91bmQtcGhpbG9zb3BoeSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9iYWNrZ3JvdW5kLXBoaWxvc29waHkuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyBcclxufVxyXG5cclxuLnBoaWxvc29waHktdGl0bGUtY29udGFpbmVyIHtcclxuICAgIHBhZGRpbmc6IDQlIDYlO1xyXG4gICAgY29sb3I6ICMyMTIzMjI7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAzdmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PhilosophyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-philosophy',
                templateUrl: './philosophy.component.html',
                styleUrls: ['./philosophy.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "MLJj":
/*!*******************************************!*\
  !*** ./src/app/website/website.module.ts ***!
  \*******************************************/
/*! exports provided: WebsiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteModule", function() { return WebsiteModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _website_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./website-routing.module */ "7z6D");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu/menu.component */ "6Svv");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1j5X");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "7Ojj");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _website_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./website.component */ "N09b");
/* harmony import */ var _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./expertise/expertise.component */ "4Ohr");
/* harmony import */ var _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./expertise-card/expertise-card.component */ "HGKX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./about-us/about-us.component */ "WLbF");
/* harmony import */ var _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us-card/about-us-card.component */ "jPSH");
/* harmony import */ var _effects_effects_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../effects/effects.module */ "HgVU");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./our-story/our-story.component */ "5eW0");
/* harmony import */ var _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./philosophy/philosophy.component */ "KoC3");
/* harmony import */ var _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./call-to-action/call-to-action.component */ "IK8j");
/* harmony import */ var _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./email-sender-form/email-sender.component */ "stJb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _email_sender_form_email_sender_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./email-sender-form/email-sender.service */ "8yM/");






















class WebsiteModule {
}
WebsiteModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebsiteModule });
WebsiteModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function WebsiteModule_Factory(t) { return new (t || WebsiteModule)(); }, providers: [
        _email_sender_form_email_sender_service__WEBPACK_IMPORTED_MODULE_20__["EmailSenderService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _effects_effects_module__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"],
            _website_routing_module__WEBPACK_IMPORTED_MODULE_1__["WebsiteRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebsiteModule, { declarations: [_website_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_8__["ExpertiseComponent"],
        _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_9__["ExpertiseCardComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
        _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsCardComponent"],
        _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_15__["OurStoryComponent"],
        _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_16__["PhilosophyComponent"],
        _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_17__["CallToActionComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_18__["EmailSenderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        _effects_effects_module__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"],
        _website_routing_module__WEBPACK_IMPORTED_MODULE_1__["WebsiteRoutingModule"]], exports: [_website_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_8__["ExpertiseComponent"],
        _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_9__["ExpertiseCardComponent"],
        _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
        _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsCardComponent"],
        _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_15__["OurStoryComponent"],
        _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_16__["PhilosophyComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
        _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_17__["CallToActionComponent"],
        _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_18__["EmailSenderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsiteModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _website_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_8__["ExpertiseComponent"],
                    _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_9__["ExpertiseCardComponent"],
                    _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
                    _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsCardComponent"],
                    _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_15__["OurStoryComponent"],
                    _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_16__["PhilosophyComponent"],
                    _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_17__["CallToActionComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_18__["EmailSenderComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_11__["LayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                    _effects_effects_module__WEBPACK_IMPORTED_MODULE_14__["EffectsModule"],
                    _website_routing_module__WEBPACK_IMPORTED_MODULE_1__["WebsiteRoutingModule"],
                ],
                exports: [
                    _website_component__WEBPACK_IMPORTED_MODULE_7__["WebsiteComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                    _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_8__["ExpertiseComponent"],
                    _expertise_card_expertise_card_component__WEBPACK_IMPORTED_MODULE_9__["ExpertiseCardComponent"],
                    _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_12__["AboutUsComponent"],
                    _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsCardComponent"],
                    _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_15__["OurStoryComponent"],
                    _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_16__["PhilosophyComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                    _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_17__["CallToActionComponent"],
                    _email_sender_form_email_sender_component__WEBPACK_IMPORTED_MODULE_18__["EmailSenderComponent"],
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
                providers: [
                    _email_sender_form_email_sender_service__WEBPACK_IMPORTED_MODULE_20__["EmailSenderService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "N09b":
/*!**********************************************!*\
  !*** ./src/app/website/website.component.ts ***!
  \**********************************************/
/*! exports provided: WebsiteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsiteComponent", function() { return WebsiteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu/menu.component */ "6Svv");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "1j5X");
/* harmony import */ var _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./expertise/expertise.component */ "4Ohr");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-us/about-us.component */ "WLbF");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./our-story/our-story.component */ "5eW0");
/* harmony import */ var _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./philosophy/philosophy.component */ "KoC3");
/* harmony import */ var _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./call-to-action/call-to-action.component */ "IK8j");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "7Ojj");











class WebsiteComponent {
    constructor() { }
    ngOnInit() { }
    scrollToElement($elementName) {
        console.log($elementName);
        const element = document.querySelector($elementName);
        element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }
}
WebsiteComponent.ɵfac = function WebsiteComponent_Factory(t) { return new (t || WebsiteComponent)(); };
WebsiteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WebsiteComponent, selectors: [["app-website"]], decls: 15, vars: 0, consts: [["fxFill", "", 3, "clickMenuItem"], ["id", "home", "fxFill", ""], ["home", ""], ["id", "expertise", "fxFill", ""], ["expertise", ""], ["id", "aboutUs", "fxFill", ""], ["aboutUs", ""], ["id", "ourStory", "fxFill", ""], ["ourStory", ""], ["fxFill", ""], ["philosophy", ""], ["id", "callToAction", "fxFill", ""], ["callToAction", ""], ["id", "footer", "fxFill", ""], ["footer", ""]], template: function WebsiteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickMenuItem", function WebsiteComponent_Template_app_menu_clickMenuItem_0_listener($event) { return ctx.scrollToElement($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-home", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-expertise", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-about-us", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-our-story", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-philosophy", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-call-to-action", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-footer", 13, 14);
    } }, directives: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["FlexFillDirective"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _expertise_expertise_component__WEBPACK_IMPORTED_MODULE_4__["ExpertiseComponent"], _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_5__["AboutUsComponent"], _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_6__["OurStoryComponent"], _philosophy_philosophy_component__WEBPACK_IMPORTED_MODULE_7__["PhilosophyComponent"], _call_to_action_call_to_action_component__WEBPACK_IMPORTED_MODULE_8__["CallToActionComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"]], styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHdlYnNpdGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6IndlYnNpdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WebsiteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-website',
                templateUrl: './website.component.html',
                styleUrls: ['./website.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'Rodrigues & Franceschini Advogados Associados';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "VPqC":
/*!**********************************************!*\
  !*** ./src/app/services/injector.service.ts ***!
  \**********************************************/
/*! exports provided: InjectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InjectorService", function() { return InjectorService; });
class InjectorService {
    static set injector(injector) {
        this._injector = injector;
    }
    static get injector() {
        return this._injector;
    }
}


/***/ }),

/***/ "WLbF":
/*!********************************************************!*\
  !*** ./src/app/website/about-us/about-us.component.ts ***!
  \********************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../about-us-card/about-us-card.component */ "jPSH");








const _c0 = ["cardListContainer"];
function AboutUsComponent_app_about_us_card_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-about-us-card", 9);
} if (rf & 2) {
    const lawyer_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", lawyer_r2.name)("expertises", lawyer_r2.expertises)("image", lawyer_r2.image);
} }
const _c1 = function () { return { "padding": "4% 6%" }; };
const _c2 = function () { return { "font-size": "4.0vw" }; };
const _c3 = function () { return { "font-size": "1.5vw" }; };
class AboutUsComponent {
    constructor() {
        this.lawyersList = [
            {
                name: 'Vitor Rodrigues',
                image: '/assets/images/vitor.jpg',
                expertises: 'Direito Internacional, Aeronáutico, Civil, Constitucional e Eleitoral.'
            },
            {
                name: 'Helem Franceschini',
                image: '/assets/images/helem.jpg',
                expertises: 'Direito Penal, Aeronáutico, Constitucional e Civil.'
            },
            {
                name: 'Dolimar Pimentel',
                image: '/assets/images/dolimar.jpg',
                expertises: 'Direito Sindical, Civil, Constitucional e Tributário.'
            },
            {
                name: 'Dara',
                image: '/assets/images/dara.jpg',
                expertises: 'Direito Civil.'
            }
        ];
    }
    ngOnInit() { }
    scrollToLeft() {
        var _a;
        (_a = this.cardListContainerRef) === null || _a === void 0 ? void 0 : _a.nativeElement.scrollBy({
            left: -308,
            behavior: 'smooth'
        });
    }
    scrollToRigth() {
        var _a;
        (_a = this.cardListContainerRef) === null || _a === void 0 ? void 0 : _a.nativeElement.scrollBy({
            left: 308,
            behavior: 'smooth'
        });
    }
}
AboutUsComponent.ɵfac = function AboutUsComponent_Factory(t) { return new (t || AboutUsComponent)(); };
AboutUsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsComponent, selectors: [["app-about-us"]], viewQuery: function AboutUsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.cardListContainerRef = _t.first);
    } }, decls: 16, vars: 7, consts: [["fxLayout", "column wrap", "fxLayoutAlign", "center stretch", 1, "abour-us-container"], ["fxFlex", "40", "fxLayout", "column wrap", "fxLayoutAlign", "center center", 1, "about-us-title-container", 3, "ngStyle.gt-xs"], ["fxFlex", "40", 3, "ngStyle.gt-xs"], ["fxFlex", "", "fxLayout", "row wrap", "fxLayoutAlign", "center center", 2, "max-width", "100%", "width", "100%"], ["type", "button", "mat-mini-fab", "", "color", "#ffffff", 2, "position", "absolute", "left", "16px", "z-index", "1", 3, "click"], ["fxFlex.gt-xs", "90", "fxFlex", "70", "fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "card-list-container", 2, "padding", "2% 1% 4% 1%"], ["cardListContainer", ""], ["fxFlex", "300px", "style", "height: 330px;", 3, "name", "expertises", "image", 4, "ngFor", "ngForOf"], ["type", "button", "mat-mini-fab", "", "color", "#ffffff", 2, "position", "absolute", "right", "16px", "; z-index", "1", 3, "click"], ["fxFlex", "300px", 2, "height", "330px", 3, "name", "expertises", "image"]], template: function AboutUsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " SOBRE N\u00D3S ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Contamos com uma equipe altamente experi\u00EAnte en diversos \u00E2mbitos do direito. Prestamos acessoria em todo o Brasil, Lisboa, Porto e Buenos Aires. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_button_click_7_listener() { return ctx.scrollToLeft(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "keyboard_arrow_left");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AboutUsComponent_app_about_us_card_12_Template, 1, 3, "app-about-us-card", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutUsComponent_Template_button_click_13_listener() { return ctx.scrollToRigth(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "keyboard_arrow_right");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.lawyersList);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultStyleDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _about_us_card_about_us_card_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsCardComponent"]], styles: [".about-us-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n\n.about-us-title-container[_ngcontent-%COMP%] {\n  max-width: 100%;\n  padding: 6vh 4vw;\n  color: #212322;\n}\n\n.about-us-title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-style: normal;\n  font-size: 7vh;\n  text-align: center;\n  margin-bottom: 4%;\n}\n\n.about-us-title-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 80%;\n  font-size: medium;\n  font-weight: 400;\n  text-align: center;\n  line-height: 1.8;\n}\n\n.card-list-container[_ngcontent-%COMP%] {\n  width: auto;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  -ms-overflow-style: none;\n  \n  scrollbar-width: none;\n  \n  \n}\n\n.card-list-container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  color: #005683;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC11cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0k7RUFDSSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDUjs7QUFFSTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFSOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQTBCLGdCQUFBO0VBQzFCLHFCQUFBO0VBQXVCLFlBQUE7RUFFdkIsZ0RBQUE7QUFESjs7QUFFSTtFQUNJLGFBQUE7QUFBUjs7QUFJQTtFQUNJLGNBQUE7QUFESiIsImZpbGUiOiJhYm91dC11cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC11cy1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hYm91dC11cy10aXRsZS1jb250YWluZXIge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogNnZoIDR2dztcclxuICAgIGNvbG9yOiAjMjEyMzIyO1xyXG5cclxuICAgIGgxIHtcclxuICAgICAgICBmb250LWZhbWlseTogXCJKdWxpdXMgU2FucyBPbmVcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiA3dmg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuOFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmNhcmQtbGlzdC1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IGF1dG87XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBJRSBhbmQgRWRnZSAqL1xyXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGaXJlZm94ICovXHJcblxyXG4gICAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIENocm9tZSwgU2FmYXJpIGFuZCBPcGVyYSAqL1xyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5tYXQtaWNvbiB7XHJcbiAgICBjb2xvcjogIzAwNTY4MztcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us',
                templateUrl: './about-us.component.html',
                styleUrls: ['./about-us.component.scss']
            }]
    }], function () { return []; }, { cardListContainerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['cardListContainer']
        }] }); })();


/***/ }),

/***/ "XNcg":
/*!******************************************************!*\
  !*** ./src/app/common/const/error-messages.const.ts ***!
  \******************************************************/
/*! exports provided: GENERIC_SAVE_ERROR_MESSAGE, GENERIC_DELETE_ERROR_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_SAVE_ERROR_MESSAGE", function() { return GENERIC_SAVE_ERROR_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERIC_DELETE_ERROR_MESSAGE", function() { return GENERIC_DELETE_ERROR_MESSAGE; });
const GENERIC_SAVE_ERROR_MESSAGE = 'Houve algum problema ao salvar a informações';
const GENERIC_DELETE_ERROR_MESSAGE = 'Não foi possível deletar este registro! Verifique se o mesmo já está sendo usado.';


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _website_website_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./website/website.module */ "MLJj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _effects_effects_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./effects/effects.module */ "HgVU");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-components/shared-components.module */ "nEHF");
/* harmony import */ var _services_injector_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/injector.service */ "VPqC");













class AppModule {
    constructor(injector) {
        _services_injector_service__WEBPACK_IMPORTED_MODULE_11__["InjectorService"].injector = injector;
    }
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"])); }, providers: [
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"], useValue: 'BRL' }
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _effects_effects_module__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"],
            _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"],
            _website_website_module__WEBPACK_IMPORTED_MODULE_6__["WebsiteModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _effects_effects_module__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"],
        _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"],
        _website_website_module__WEBPACK_IMPORTED_MODULE_6__["WebsiteModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _effects_effects_module__WEBPACK_IMPORTED_MODULE_8__["EffectsModule"],
                    _shared_components_shared_components_module__WEBPACK_IMPORTED_MODULE_10__["SharedComponentsModule"],
                    _website_website_module__WEBPACK_IMPORTED_MODULE_6__["WebsiteModule"]
                ],
                providers: [
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"], useValue: 'pt-BR' },
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["DEFAULT_CURRENCY_CODE"], useValue: 'BRL' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }]; }, null); })();


/***/ }),

/***/ "iGNJ":
/*!*********************************************************!*\
  !*** ./src/app/common/const/base-backend-path.const.ts ***!
  \*********************************************************/
/*! exports provided: BASE_BACKEND_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_BACKEND_PATH", function() { return BASE_BACKEND_PATH; });
const BASE_BACKEND_PATH = 'http://localhost:3000/api/';


/***/ }),

/***/ "jPSH":
/*!******************************************************************!*\
  !*** ./src/app/website/about-us-card/about-us-card.component.ts ***!
  \******************************************************************/
/*! exports provided: AboutUsCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsCardComponent", function() { return AboutUsCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _effects_elevation_effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../effects/elevation.effect */ "J2CK");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







const _c0 = function (a0) { return { "background-image": a0, "margin": "4px" }; };
class AboutUsCardComponent {
    constructor() {
        this.name = '';
        this.image = '';
        this.expertises = '';
    }
    ngOnInit() { }
}
AboutUsCardComponent.ɵfac = function AboutUsCardComponent_Factory(t) { return new (t || AboutUsCardComponent)(); };
AboutUsCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutUsCardComponent, selectors: [["app-about-us-card"]], inputs: { name: "name", image: "image", expertises: "expertises" }, decls: 7, vars: 5, consts: [["appElevationEffect", "", "fxFlex", "", "fxLayout", "column wrap", "fxLayoutAlign", "space-evenly center", 1, "about-us-card"], ["fxFlex", "150px", 1, "about-us-image", 3, "ngStyle"], ["fxFlex", "auto"], [2, "word-break", "break-all", "white-space", "normal"]], template: function AboutUsCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, "url(" + ctx.image + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.expertises, " ");
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _effects_elevation_effect__WEBPACK_IMPORTED_MODULE_2__["ElevationEffectDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardContent"]], styles: [".about-us-card[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/background-card.png);\n  background-color: #d0d3d4;\n  background-size: cover;\n  top: 0px;\n  width: 100%;\n  height: 100%;\n  color: #d0d3d4;\n  text-align: center;\n  border-radius: 0px;\n  box-shadow: #212322;\n  transition: 0.2s all;\n}\n.about-us-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: \"Julius Sans One\", sans-serif;\n  font-weight: 100;\n  font-size: 27.5px;\n}\n.about-us-card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: scale(1.05);\n  transform-origin: center top;\n}\n.about-us-card[_ngcontent-%COMP%]   .mat-card-content[_ngcontent-%COMP%] {\n  max-width: 100%;\n  text-align: center;\n  text-justify: auto;\n}\n.about-us-image[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  background-size: cover;\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhYm91dC11cy1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseURBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFDSTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNSO0FBRUk7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQUFSO0FBR0k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURSO0FBS0E7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGSiIsImZpbGUiOiJhYm91dC11cy1jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFib3V0LXVzLWNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQtY2FyZC5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDNkNDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6ICNkMGQzZDQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAjMjEyMzIyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGw7XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkp1bGl1cyBTYW5zIE9uZVwiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNy41cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIHRvcDtcclxuICAgIH1cclxuXHJcbiAgICAubWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB0ZXh0LWp1c3RpZnk6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hYm91dC11cy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-us-card',
                templateUrl: './about-us-card.component.html',
                styleUrls: ['./about-us-card.component.scss']
            }]
    }], function () { return []; }, { name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], expertises: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nEHF":
/*!***************************************************************!*\
  !*** ./src/app/shared-components/shared-components.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedComponentsModule", function() { return SharedComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "0MNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared-features/dialog-presenter/service/dialog.service */ "8k44");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dialog/dialog.component */ "q4NH");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../angular-material.module */ "rhD1");









class SharedComponentsModule {
}
SharedComponentsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedComponentsModule });
SharedComponentsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedComponentsModule_Factory(t) { return new (t || SharedComponentsModule)(); }, providers: [
        _shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedComponentsModule, { declarations: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"]], exports: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedComponentsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["LayoutModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
                ],
                exports: [
                    _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]
                ],
                providers: [
                    _shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_5__["DialogService"]
                ],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "q4NH":
/*!**************************************************************!*\
  !*** ./src/app/shared-components/dialog/dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function DialogComponent_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.dialogRef.close(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.dialog.ok, " ");
} }
class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
    }
    get dialog() {
        return this.data;
    }
}
DialogComponent.ɵfac = function DialogComponent_Factory(t) { return new (t || DialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
DialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DialogComponent, selectors: [["app-dialog-actions"]], decls: 8, vars: 5, consts: [["mat-dialog-title", ""], ["mat-button", "", 3, "color", "click"], ["mat-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"]], template: function DialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DialogComponent_Template_button_click_5_listener() { return ctx.dialogRef.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DialogComponent_button_7_Template, 2, 1, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dialog.title, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dialog.content, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx.dialog.ok ? "warn" : "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dialog.close, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dialog.ok);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaWFsb2cuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialog-actions',
                templateUrl: './dialog.component.html',
                styleUrls: ['./dialog.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "rhD1":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");






































const mm = [
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
    _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
    _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
    _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
    _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
    _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
    _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
    _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]
];
class AngularMaterialModule {
    constructor(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        // matIconRegistry.registerFontClassAlias('fontawesome', 'fa');
    }
    static forRoot() {
        return {
            ngModule: AngularMaterialModule,
            providers: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"]]
        };
    }
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"])); }, providers: [], imports: [[...mm], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]], exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_6__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_11__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_17__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_18__["MatMenuModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_21__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_24__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_25__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_28__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_29__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_30__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_31__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_32__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_33__["MatTreeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [...mm],
                exports: [...mm
                ],
                providers: []
            }]
    }], function () { return [{ type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__["MatIconRegistry"] }]; }, null); })();


/***/ }),

/***/ "stJb":
/*!*********************************************************************!*\
  !*** ./src/app/website/email-sender-form/email-sender.component.ts ***!
  \*********************************************************************/
/*! exports provided: EmailSenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSenderComponent", function() { return EmailSenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _email_sender_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-sender.service */ "8yM/");
/* harmony import */ var src_app_shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared-features/dialog-presenter/service/dialog.service */ "8k44");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













function EmailSenderComponent_mat_error_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informe seu nome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailSenderComponent_mat_error_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informe seu telefone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailSenderComponent_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Informe seu e-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EmailSenderComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Preencha a mensagem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "padding": "0px 32px 32px 32px" }; };
class EmailSenderComponent {
    constructor(fb, emailSender, dialogService) {
        this.fb = fb;
        this.emailSender = emailSender;
        this.dialogService = dialogService;
        this.form = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            telephone: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.formControls = this.form.controls;
    }
    ngOnInit() { }
    onClickEmailSender() {
        this.emailSender.contactUs(this.form.value)
            .toPromise()
            .then(() => {
            this.dialogService.showAlert('Será enviado um e-mail para contato.');
        })
            .catch(() => {
            this.dialogService.showAlert('Não foi possível realizar o envio. Por favor, tente novamente ou por outro meio.');
        });
    }
}
EmailSenderComponent.ɵfac = function EmailSenderComponent_Factory(t) { return new (t || EmailSenderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_email_sender_service__WEBPACK_IMPORTED_MODULE_2__["EmailSenderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"])); };
EmailSenderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmailSenderComponent, selectors: [["app-email-sender"]], decls: 18, vars: 9, consts: [["novalidate", "", "fxLayout", "row wrap", "fxLayoutAlign", "center stretch", 1, "email-sender-form-container", 3, "formGroup"], ["fxFlex.gt-xs", "50", "fxFlex", "100", "fxLayout", "row wrap", "fxLayoutAlign.gt-xs", "space-evenly stretch", "fxLayoutAlign", "start start", 1, "inputs-container", 3, "ngStyle.gt-xs"], ["fxFlex", "100"], ["matInput", "", "placeholder", "Nome", "formControlName", "name"], [4, "ngIf"], ["matInput", "", "placeholder", "Telefone", "formControlName", "telephone"], ["matInput", "", "placeholder", "E-mail", "formControlName", "email"], ["fxFlex.gt-xs", "50", "fxFlex", "100", "fxLayout", "row wrap", 1, "inputs-container", 3, "ngStyle.gt-xs"], ["fxFlex", "100", "fxFlexAlign", "start"], ["placeholder", "Mensagem", "formControlName", "message", "matInput", "", "cdkTextareaAutosize", "", "CdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "cdkAutosizeMaxRows", "6"], ["fxFlex", "50", "fxFlexAlign", "end", "mat-flat-button", "", 1, "email-sender-button", 3, "click"]], template: function EmailSenderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EmailSenderComponent_mat_error_4_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EmailSenderComponent_mat_error_7_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EmailSenderComponent_mat_error_10_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "textarea", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EmailSenderComponent_mat_error_15_Template, 3, 0, "mat-error", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmailSenderComponent_Template_button_click_16_listener() { return ctx.onClickEmailSender(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Enviar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControls.name.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControls.telephone.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControls.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle.gt-xs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formControls.message.hasError("required"));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexAlignDirective"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_9__["CdkTextareaAutosize"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"]], styles: [".email-sender-form-container[_ngcontent-%COMP%] {\n  font-size: large;\n  width: 100%;\n  height: auto;\n}\n\n.email-sender-button[_ngcontent-%COMP%] {\n  background-color: #005683;\n  color: #d0d3d4;\n  font-size: large;\n  border-radius: 0px;\n  padding: 8px;\n  margin-bottom: 1.25em;\n}\n\n.inputs-container[_ngcontent-%COMP%] {\n  padding: 0px 4vh 4vh 4vh;\n}\n\n  .mat-focused .mat-form-field-label {\n  \n  color: #212322 !important;\n}\n\n .mat-form-field-underline {\n  \n  background-color: #212322 !important;\n}\n\n .mat-form-field-ripple {\n  \n  background-color: #005683 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxlbWFpbC1zZW5kZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSx3QkFBQTtBQUNKOztBQUtBO0VBQ0ksd0JBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksNEJBQUE7RUFDQSxvQ0FBQTtBQUZKOztBQUtBO0VBQ0kseUNBQUE7RUFDQSxvQ0FBQTtBQUZKIiwiZmlsZSI6ImVtYWlsLXNlbmRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lbWFpbC1zZW5kZXItZm9ybS1jb250YWluZXIge1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZW1haWwtc2VuZGVyLWJ1dHRvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NjgzO1xyXG4gICAgY29sb3I6ICNkMGQzZDQ7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xyXG59XHJcblxyXG4uaW5wdXRzLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAwcHggNHZoIDR2aCA0dmg7XHJcbn1cclxuXHJcbiRjdXN0b20tbWFpbi1jb2xvcjogIzAwNTY4MztcclxuJGN1c3RvbS1sYWJlbC1jb2xvcjogIzIxMjMyMjtcclxuXHJcbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAkY3VzdG9tLWxhYmVsLWNvbG9yICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20tbGFiZWwtY29sb3IgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUgd2hlbiBmb2N1c2VkKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjdXN0b20tbWFpbi1jb2xvciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmailSenderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-email-sender',
                templateUrl: './email-sender.component.html',
                styleUrls: ['./email-sender.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _email_sender_service__WEBPACK_IMPORTED_MODULE_2__["EmailSenderService"] }, { type: src_app_shared_features_dialog_presenter_service_dialog_service__WEBPACK_IMPORTED_MODULE_3__["DialogService"] }]; }, null); })();


/***/ }),

/***/ "u39C":
/*!***************************************************!*\
  !*** ./src/app/common/error-handler/app-error.ts ***!
  \***************************************************/
/*! exports provided: AppError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppError", function() { return AppError; });
class AppError {
    constructor(originalErro) {
        this.originalErro = originalErro;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'website/index',
    },
    {
        path: 'website',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./website/website.module */ "MLJj")).then(module => module.WebsiteModule),
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map