"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PanelComponent = void 0;
var core_1 = require("@angular/core");
var phrases_mock_1 = require("./phrases-mock");
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.instruction = 'Traduza a frase';
        this.phrases = phrases_mock_1.PHRASES;
        this.response = '';
        this.round = 0;
        this.progress = 0;
        this.attempts = 3;
        this.endGame = new core_1.EventEmitter();
        this.updateRound();
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    // public updateResponse(response: Event): void {
    // console.log((<HTMLInputElement>response.target).value);
    // }
    PanelComponent.prototype.updateResponse = function (_a) {
        var target = _a.target;
        var value = target.value;
        this.response = value;
    };
    PanelComponent.prototype.checkResponse = function () {
        if (this.roundPhrase.phrasePtBr.toLowerCase() === this.response.toLowerCase()) {
            this.round++;
            this.progress = (100 / this.phrases.length) * this.round;
            this.round === this.phrases.length ? this.endGame.emit(true) : this.updateRound();
        }
        else {
            this.attempts--;
            this.attempts > -1 ? this.updateRound() : this.endGame.emit(false);
        }
    };
    PanelComponent.prototype.updateRound = function () {
        this.roundPhrase = this.phrases[this.round];
        this.response = '';
    };
    PanelComponent.prototype.ngOnDestroy = function () {
        // this.round = 0;
        // this.attempts = 3;
        // this.progress = (100 / this.phrases.length) * this.round;
    };
    __decorate([
        core_1.Output()
    ], PanelComponent.prototype, "endGame");
    PanelComponent = __decorate([
        core_1.Component({
            selector: 'app-panel',
            templateUrl: './panel.component.html',
            styleUrls: ['./panel.component.css']
        })
    ], PanelComponent);
    return PanelComponent;
}());
exports.PanelComponent = PanelComponent;
