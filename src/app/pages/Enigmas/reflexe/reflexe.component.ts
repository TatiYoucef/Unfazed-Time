import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reflexe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reflexe.component.html',
  styleUrl: './reflexe.component.scss'
})
export class ReflexeComponent {

  countdown: number = 10; // Countdown starts from 10
  gameActive: boolean = false; // Whether the game is active
  canClick: boolean = false; // Whether the user can click
  message: string = 'Press the button or space key to start! stop it at: 0s < t < 0.5s'; // Display message
  timer: any; // Countdown timer

  // Start game function
  startGame() {
    this.message = 'Wait for the right moment...';
    this.countdown = 10;
    this.gameActive = true;
    this.canClick = false;

    // Start countdown timer
    this.timer = setInterval(() => {
      this.countdown = Number((this.countdown - 0.01).toFixed(2));

      // When countdown reaches 0, end the game
      if (this.countdown === 0) {
        clearInterval(this.timer);
        this.gameActive = false;
        this.canClick = false;
        this.message = 'Too slow! Press to restart.';
      }
    }, 10);
  }

  // Handle user click or space key press
  handleClick() {
    const now = performance.now();
    clearInterval(this.timer);

    if (this.countdown > 0 && this.countdown <= 0.5) {
      this.message = this.countdown + 's : You win! Have this as a reward: gameMasterCTF{ADHD_k1ll3r_141477}';
      this.gameActive = false;
      this.canClick = false;
    } else {
      this.message =this.countdown + 's :Wrong timing! Press to retry.';
      this.gameActive = false;
      this.canClick = false;
    }
  }

  // Listen for Space key press
  @HostListener('window:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent) {
    if (event.code === 'Space') {
      this.gameActive ? this.handleClick() : this.startGame();
    }
  }
}
