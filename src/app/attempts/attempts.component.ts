import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Heart } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() public attempts: number;

  public hearts: Array<Heart> = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]

  constructor() {
    
  }

  ngOnChanges(): void {
    if(this.hearts.length != this.attempts){
      const index: number = this.hearts.length - this.attempts;
      this.hearts[index - 1].isFull = false;
    }
  }

  ngOnInit(): void {

  }

}
