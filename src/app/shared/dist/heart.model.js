"use strict";
exports.__esModule = true;
exports.Heart = void 0;
var Heart = /** @class */ (function () {
    function Heart(isFull, urlFullHeart, urlEmptyHeart) {
        if (urlFullHeart === void 0) { urlFullHeart = '../../../assets/coracao_cheio.png'; }
        if (urlEmptyHeart === void 0) { urlEmptyHeart = '../../../assets/coracao_vazio.png'; }
        this.isFull = isFull;
        this.urlFullHeart = urlFullHeart;
        this.urlEmptyHeart = urlEmptyHeart;
    }
    Heart.prototype.showHeart = function () {
        return this.isFull ? this.urlFullHeart : this.urlEmptyHeart;
    };
    return Heart;
}());
exports.Heart = Heart;
