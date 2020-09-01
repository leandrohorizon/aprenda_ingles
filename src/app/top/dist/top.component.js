"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.TopComponent = void 0;
var core_1 = require("@angular/core");
var TopComponent = /** @class */ (function () {
    function TopComponent() {
        this.title = 'Learning English';
    }
    TopComponent = __decorate([
        core_1.Component({
            //selector: '[app-top]', // se torna atributo
            selector: 'app-top',
            templateUrl: './top.component.html',
            // template: `<p>this is top component</p>` com backticks é possivel quebrar linha
            styleUrls: ['./top.component.css']
            // styles: ['.example{ color: red }']
        })
    ], TopComponent);
    return TopComponent;
}());
exports.TopComponent = TopComponent;
