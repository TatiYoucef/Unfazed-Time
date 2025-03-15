import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hints',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hints.component.html',
  styleUrl: './hints.component.scss'
})
export class HintsComponent {

  hints = ['Look deeply through the problem', 'need a hand ?' , 'try to go to this path /8/8/8/'];
  revealedHints = new Array<Boolean>(this.hints.length).fill(false)

  toggleHint(index:number){
    this.revealedHints[index] = !this.revealedHints[index];
  }

  router = inject(Router);

  goBack(){
    this.router.navigate(['/home/dailyQuiz'])
  }

}
