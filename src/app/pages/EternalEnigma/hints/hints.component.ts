import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";
import { StarrySkyComponent } from "../../../components/starry-sky/starry-sky.component";

@Component({
  selector: 'app-hints',
  standalone: true,
  imports: [CommonModule, LoadingDailyComponent, StarrySkyComponent],
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

    this.startShootingStars();

  }

  shootingStars: any[] = [];
  private shootingStarInterval: any;

  ngOnDestroy() {
    if (this.shootingStarInterval) {
      clearInterval(this.shootingStarInterval);
    }
  }
  
  startShootingStars() {
    // Create first shooting star after random delay
    setTimeout(() => {
      this.createShootingStar();
    }, Math.random() * 3000 + 2000);
    
    // Then create them at random intervals (20-27 seconds)
    this.shootingStarInterval = setInterval(() => {
      this.createShootingStar();
    }, Math.random() * 7000 + 20000);
  }
  
  createShootingStar() {
    // Random starting position
    const startSide = Math.random();
    let startX, startY, endX, endY;
    
    if (startSide < 0.5) {
      // Start from top-left area, move to bottom-right
      startX = Math.random() * 30;
      startY = Math.random() * 20;
      endX = startX + (Math.random() * 40 + 50);
      endY = startY + (Math.random() * 50 + 60);
    } else {
      // Start from top-right area, move to bottom-left
      startX = Math.random() * 30 + 70;
      startY = Math.random() * 20;
      endX = startX - (Math.random() * 40 + 50);
      endY = startY + (Math.random() * 50 + 60);
    }
    
    // Calculate angle for rotation
    const dx = endX - startX;
    const dy = endY - startY;
    const angle = Math.atan2(dy, dx) * (180 / Math.PI);
    
    const duration = Math.random() * 2.5 + 10; // 10-12.5 seconds
    
    const shootingStar = {
      id: Date.now() + Math.random(),
      startX,
      startY,
      endX,
      endY,
      angle,
      duration,
      scale: Math.random() * 0.4 + 0.9, // 0.9-1.3x
    };
    
    this.shootingStars.push(shootingStar);
    
    // Animate using Web Animations API
    setTimeout(() => {
      const element = document.querySelector(`[data-shooting-star-id="${shootingStar.id}"]`) as HTMLElement;
      if (element) {
        element.animate([
          {
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: 0,
            transform: `rotate(${angle}deg) scale(0.5)`
          },
          {
            left: `${startX}%`,
            top: `${startY}%`,
            opacity: 1,
            transform: `rotate(${angle}deg) scale(${shootingStar.scale})`,
            offset: 0.05
          },
          {
            left: `${endX}%`,
            top: `${endY}%`,
            opacity: 1,
            transform: `rotate(${angle}deg) scale(${shootingStar.scale})`,
            offset: 0.9
          },
          {
            left: `${endX}%`,
            top: `${endY}%`,
            opacity: 0,
            transform: `rotate(${angle}deg) scale(0.3)`
          }
        ], {
          duration: duration * 1000,
          easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          fill: 'forwards'
        });
      }
    }, 10);
    
    // Remove after animation completes
    setTimeout(() => {
      this.shootingStars = this.shootingStars.filter(s => s.id !== shootingStar.id);
    }, duration * 1000 + 100);
  }
}
