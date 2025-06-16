import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dice',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dice.component.html',
  styleUrl: './dice.component.scss'
})
export class DiceComponent {

  matchSound = new Audio('../../../../assets/Sounds/roundMatch.mp3');
  started = false;

  currentDice: number = 1;        // The dice face currently shown

  // Roll the dice
  rollDice() {

    if(!this.started){
      this.started = true
      this.matchSound.loop = true;
      this.matchSound.play();
    }

    this.currentDice = Math.floor(Math.random() * 7) + 1;
  }

}