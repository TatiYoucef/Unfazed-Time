import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";

@Component({
  selector: 'app-hints',
  standalone: true,
  imports: [CommonModule, LoadingDailyComponent],
  templateUrl: './hints.component.html',
  styleUrl: './hints.component.scss'
})
export class HintsComponent {

  hints : String[] = [];
  revealedHints = new Array<Boolean>(this.hints.length).fill(false)

  toggleHint(index:number){
    this.revealedHints[index] = !this.revealedHints[index];
  }

  router = inject(Router);

  goBack(){
    this.router.navigate(['/home/dailyQuiz'])
  }

  fetchServices = inject(FetchModulesService);

  d = new Date() ;
  date = this.d.getDate();
  month = this.d.getMonth() + 1;

  isStarted: boolean = false;


  ngOnInit(): void {

    this.fetchServices.fetchdailyEnigma(this.month,this.date).subscribe((quiz) => {
      this.hints = quiz.hints;
      this.isStarted = true; 
    });

  }

  colors = ['#ffffff', '#a0c4ff', '#bdb2ff', '#ffd6a5', '#ffc6ff'];
  totalStars = 120;

  stars = Array.from({ length: this.totalStars }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,                // random pixel size
    color: this.colors[Math.floor(Math.random() * this.colors.length)],
    delay: Math.random() * 5,                   // flicker delay
    duration: Math.random() * 3 + 2,            // flicker speed
    layer: Math.floor(Math.random() * 3) + 1    // 1, 2, or 3 depth
  }));

}
