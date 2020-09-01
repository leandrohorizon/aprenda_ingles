export class Heart {
    constructor(
        public isFull: boolean,
        public urlFullHeart: string = '../../../assets/coracao_cheio.png',
        public urlEmptyHeart: string = '../../../assets/coracao_vazio.png'
    ){}

    public showHeart(): string {
        return this.isFull ? this.urlFullHeart : this.urlEmptyHeart;
    }
}