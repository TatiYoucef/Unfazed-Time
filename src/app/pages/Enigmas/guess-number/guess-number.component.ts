import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-guess-number',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './guess-number.component.html',
  styleUrl: './guess-number.component.scss'
})
export class GuessNumberComponent {

  matchSound = new Audio('../../../../assets/Sounds/roundMatch.mp3');

  randomNumber: number = 0; // The randomly generated number
  userGuess: number | null = null; // User's input guess
  message: string = ''; // Message displayed to the user
  attempts: number = 10; // Number of remaining attempts
  gameStarted: boolean = false; // Indicates if the game has started

  // Function to start the game
  startGame() {

    this.matchSound.loop = true;
    this.matchSound.currentTime = 0;
    this.matchSound.play();

    this.randomNumber = Math.floor(Math.random() * 1000) + 1; // Generate a number between 1 and 1000
    this.attempts = 10; // Reset attempts
    this.message = ''; // Clear message
    this.gameStarted = true; // Set game state to started
  }

  // Function to check the user's guess
  checkGuess() {
    if (this.userGuess === null) return; // Prevent errors if input is empty
    
    this.attempts--; // Reduce remaining attempts
    
    if (this.userGuess === this.randomNumber) {
      this.message = "Correct! You guessed the number! here's the flag: gameMasterCTF{Logarithm_1s_useful_at_guessing}"; // Win message
    } else if (this.attempts === 0) {
      this.matchSound.pause();
      this.message = `Game over! The number was ${this.randomNumber}.`; // Loss message
    } else if (this.userGuess < this.randomNumber) {
      this.message = 'Too low! Try something else.';
    } else {
      this.message = 'Too high! Try something else.'; 
    }
    
    this.userGuess = null; // Reset input field
  }
}
