"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AttemptsComponent = void 0;
var core_1 = require("@angular/core");
var heart_model_1 = require("../shared/heart.model");
var AttemptsComponent = /** @class */ (function () {
    function AttemptsComponent() {
        this.hearts = [
            new heart_model_1.Heart(true),
            new heart_model_1.Heart(true),
            new heart_model_1.Heart(true),
        ];
    }
    AttemptsComponent.prototype.ngOnChanges = function () {
        if (this.hearts.length != this.attempts) {
            var index = this.hearts.length - this.attempts;
            this.hearts[index - 1].isFull = false;
        }
    };
    AttemptsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.Input()
    ], AttemptsComponent.prototype, "attempts");
    AttemptsComponent = __decorate([
        core_1.Component({
            selector: 'app-attempts',
            templateUrl: './attempts.component.html',
            styleUrls: ['./attempts.component.css']
        })
    ], AttemptsComponent);
    return AttemptsComponent;
}());
exports.AttemptsComponent = AttemptsComponent;
