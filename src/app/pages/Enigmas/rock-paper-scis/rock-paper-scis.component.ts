import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-rock-paper-scis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rock-paper-scis.component.html',
  styleUrl: './rock-paper-scis.component.css'
})
export class RockPaperScisComponent {

  choices = ['rock', 'paper', 'scissors'];

  yourChoice !: String;
  opponentChoice !: String;
  playerScore = 0;
  opponentScore = 0;
  result = '';

  started = false;
  matchSound = new Audio('../../../../assets/Sounds/roundMatch.mp3');

  limit = 10

  play(playerChoice: string) {

    if(!this.started){
      this.started = true
      this.matchSound.loop = true;
      this.matchSound.play();
    }

    this.yourChoice = playerChoice;
    this.opponentChoice = this.choices[Math.floor(Math.random() * 3)];

    if (playerChoice === this.opponentChoice) {
      this.result = "It's a draw!";
    } else if (
      (playerChoice === 'rock' && this.opponentChoice === 'scissors') ||
      (playerChoice === 'paper' && this.opponentChoice === 'rock') ||
      (playerChoice === 'scissors' && this.opponentChoice === 'paper')
    ) {
      this.result = 'You win!';
      this.playerScore++;
    } else {
      this.result = 'You lose!';
      this.opponentScore++;
    }

    if(this.opponentScore === this.limit){
      this.matchSound.pause()
      this.matchSound.currentTime = 0
      this.started = false;

      this.opponentScore = 0;
      this.playerScore = 0;
      this.result = this.result + " Opponent won... but I know you can do it !!!";

    }

  }

}

