import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';

import { Phrase } from '../shared/phrase.model';
import { PHRASES } from './phrases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit, OnDestroy {

  public instruction: string = 'Traduza a frase';
  private phrases: Array<Phrase> = PHRASES;
  public response: string = '';

  private round: number = 0;
  public roundPhrase: Phrase;
  public progress: number = 0;

  public attempts: number = 3;

  @Output() public endGame: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    this.updateRound();
  }

  ngOnInit(): void {
  }

  // public updateResponse(response: Event): void {
    // console.log((<HTMLInputElement>response.target).value);
  // }

  public updateResponse({ target }: Event): void {
    const { value }: any = <HTMLInputElement>target;
    this.response = value;
  }

  public checkResponse(): void{
    if(this.roundPhrase.phrasePtBr.toLowerCase() === this.response.toLowerCase()){
      this.round++;
      this.progress = (100 / this.phrases.length) * this.round;
      this.round === this.phrases.length ? this.endGame.emit(true) : this.updateRound();
    }else{
      this.attempts--;
      this.attempts > -1 ? this.updateRound() : this.endGame.emit(false);
    }
  }

  public updateRound(): void {
    this.roundPhrase = this.phrases[this.round];
    this.response = '';
  }

  ngOnDestroy(): void {
    // this.round = 0;
    // this.attempts = 3;
    // this.progress = (100 / this.phrases.length) * this.round;
  }
}
