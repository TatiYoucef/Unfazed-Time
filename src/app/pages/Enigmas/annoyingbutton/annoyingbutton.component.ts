import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-annoyingbutton',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './annoyingbutton.component.html',
  styleUrl: './annoyingbutton.component.scss'
})
export class AnnoyingbuttonComponent {

  text = "You can't touch me!!!";
  touched = false

  buttonTop: number = 0;
  buttonLeft: number = 0;
  containerWidth: number = window.innerWidth;
  containerHeight: number = window.innerHeight;
  buttonWidth: number = 100; // Approximate width of the button
  buttonHeight: number = 40; // Approximate height of the button
  stepSize = 200; //offset

  moveButton() {
    let newTop = this.buttonTop + (Math.random() > 0.5 ? this.stepSize : -this.stepSize);
    let newLeft = this.buttonLeft + (Math.random() > 0.5 ? this.stepSize : -this.stepSize);

    // Ensure button doesn't go out of bounds
    if (newTop < 0 || newTop > this.containerHeight - 50) {
      newTop = this.buttonTop - (newTop < 0 ? -this.stepSize : this.stepSize);
    }

    if (newLeft < 0 || newLeft > this.containerWidth - 100) {
      newLeft = this.buttonLeft - (newLeft < 0 ? -this.stepSize : this.stepSize);
    }

    this.buttonTop = newTop;
    this.buttonLeft = newLeft;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.containerWidth = window.innerWidth;
    this.containerHeight = window.innerHeight;
  }

}
