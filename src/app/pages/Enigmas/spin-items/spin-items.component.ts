import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-spin-items',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spin-items.component.html',
  styleUrl: './spin-items.component.scss'
})
export class SpinItemsComponent {

  jingleSound = new Audio('../../../../assets/Sounds/jingleItems.mp4');


  items: string[] = ['mushroom.png', 'star.png', 'flower.png', 'redShell.png', 'sunshine.png', 'blueShell.png', 'bomb.png'];
  currentItem: string = this.items[0]; // Default image
  isPlaying: boolean = false;
  intervalId: any;
  message: string = '';

  // Starts the cycling of items
  startGame() {

    this.jingleSound.loop = true;
    this.jingleSound.play();
    this.currentItem = this.items[0];
    this.isPlaying = true;
    this.message = '';
    this.intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * this.items.length);
      this.currentItem = this.items[randomIndex];
    }, 200); // Changes image every 200ms
  }

  // Stops the cycling and checks the result
  stopGame() {

    this.jingleSound.pause();
    this.jingleSound.currentTime = 0;

    if (this.isPlaying) {
      clearInterval(this.intervalId);
      this.isPlaying = false;
      if (this.currentItem === 'sunshine.png') {
        this.message = 'YUUUPPIIII, You Did it!! gameMasterCTF{MarioKart_Madness}';
      } else {
        this.message = 'Try Again!';
      }
    }

  }

}
