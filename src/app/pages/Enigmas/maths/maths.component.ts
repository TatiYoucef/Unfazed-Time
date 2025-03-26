import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-maths',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './maths.component.html',
  styleUrl: './maths.component.scss'
})
export class MathsComponent {

  num1: number = 0;
  num2: number = 0;
  operator: string = '+';
  answer: number | null = null;
  message: string = '';
  score: number = 0;
  timeLeft: number = 21; // 20 seconds to solve 7
  timer: any;
  gameStarted: boolean = false;

  matchSound = new Audio('../../../../assets/Sounds/timeRun.mp4');

  // Start the game
  startGame() {
    this.score = 0;
    this.message = '';
    this.matchSound.play();
    this.timeLeft = 21;
    this.gameStarted = true;
    this.generateQuestion();

    // Start countdown timer
    this.timer = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.endGame(false);
      }
    }, 1000);
  }

  // Generate a new math problem
  generateQuestion() {
    const operators = ['+', '-', '×'];
    this.operator = operators[Math.floor(Math.random() * operators.length)];
    this.num1 = Math.floor(Math.random() * 20) + 1;
    this.num2 = Math.floor(Math.random() * 20) + 1;

    // Avoid negative results in subtraction
    if (this.operator === '-' && this.num1 < this.num2) {
      [this.num1, this.num2] = [this.num2, this.num1];
    }

    // Prevent zero multiplication
    if (this.operator === '×' && this.num2 === 1) {
      this.num2 = Math.floor(Math.random() * 9) + 2;
    }
  }

  // Check the user's answer
  checkAnswer() {
    if (this.answer === this.calculateCorrectAnswer()) {
      this.score++;
      this.answer = null;
      if (this.score === 10) {
        this.endGame(true);
      } else {
        this.generateQuestion();
      }
    } else {
      this.message = '❌ Wrong! Try again.';
      this.answer = null;
      setTimeout(() => (this.message = ''), 1000);
    }
  }

  // Calculate the correct answer
  calculateCorrectAnswer(): number {
    switch (this.operator) {
      case '+': return this.num1 + this.num2;
      case '-': return this.num1 - this.num2;
      case '×': return this.num1 * this.num2;
      default: return 0;
    }
  }

  // End the game
  endGame(won: boolean) {
    clearInterval(this.timer);
    this.matchSound.pause();
    this.matchSound.currentTime = 0
    this.gameStarted = false;
    this.message = won ? 'You won, KJBKXJZKJDX: gameMasterCTF{B1g_br41n_t1me_7714}' : 'Times up! You lost.';
  }

}
