import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'app1';
  public inGame: boolean = true;
  public isVitory: boolean = false;

  public endGame(isVitory: boolean): void {
    console.log(isVitory);
    this.isVitory = isVitory;
    this.inGame = false;
  }

  public restartGame(): void {
    this.inGame = true;
    this.isVitory = false;
  }
}
