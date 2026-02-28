import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { Achievements, MonthPacket, QuizDay } from '../../../models/types';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { StarrySkyComponent } from '../../../components/starry-sky/starry-sky.component';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [LoadingDailyComponent, CommonModule, StarrySkyComponent],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit {

  isStarted: boolean = false;

  fetchServices = inject(FetchModulesService);
  monthPack !: Array<MonthPacket>;
  achievements !: Achievements;
  currentMonthIndex = 0; // Assuming January is the first month

  nbrAchieved: number = 0;
  nbrBadges: number = 0;
  mainProgress: string = '0.00%';

  ngOnInit(): void {
    
    this.fetchServices.fetchAllEnigmas().subscribe((liste) => {
      this.monthPack = liste;
      this.fetchServices.fetchAchievements().subscribe((achievements) => {
        this.achievements = achievements;
        this.percentage = ((this.achievements.nbrSolved / 367) * 100);
        this.isStarted = true; // Set to true after fetching enigmas
        this.nbrAchieved = this.CalculatenbrAchievements();

        this.nbrBadges = this.CalculatenbrBadges();
        this.mainProgress = this.CalculateProgress();
      });
    });

  }

  nextMonth() {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % 12;
  }

  previousMonth() {
    this.currentMonthIndex = (this.currentMonthIndex + 11) % 12;
  }

  CalculateProgress() {
    return ((this.achievements.nbrSolved + this.nbrAchieved + this.nbrBadges) / (367 + 7 + 7) * 100).toFixed(2);
  }

  CalculatenbrBadges(){
    let percentage:number = Number(((this.achievements.nbrSolved / 367) * 100).toFixed(2));

    if(percentage < 10) return 2;
    if(percentage < 25) return 3;
    if(percentage < 50) return 4;
    if(percentage < 80) return 5;
    if(percentage < 100) return 6;
    return 7; // If percentage is 100 or more

  }

  CalculatenbrAchievements() {
    return (this.achievements.NightOwl ? 1:0) + (this.achievements.EarlyBird ? 1:0) + (this.achievements.BrokenStreak ? 1:0) + (this.achievements.nbrFailures >= 100 ? 1:0) + (this.achievements.BestStreak >= 50 ? 1:0);
  }

  @ViewChild('notificationBar') notificationBar!: ElementRef;
  showNotification: boolean = false;
  notificationMessage: String = '';
  isSuccess: boolean = false;

  displayNotification(message: String) { //display div
    this.notificationMessage = message;
    this.showNotification = true;

    setTimeout(() => {
      this.showNotification = false;
    }, 5000); // Hide after 5 seconds


  }

  clickCard(month: number, day: QuizDay){
    
    if(!day.solved) {
      this.displayNotification("You can only replay the already solved Enigmas");
      return;
    }
    this.router.navigate(['/home/dailyQuiz', month, day.day])
  }

  router = inject(Router);


  percentage!: number;
  isNeonCina = false;
  isNeonFlower = false;
  isNeonByul = false;
  isNeonBG = false;
  isNeonSun = false;
  isNeonNiwa = false;
  isNeonPico = false;
  isDarkMode = false;

  turnON = new Audio('../../../assets/Sounds/lightON.wav');
  turnOFF = new Audio('../../../assets/Sounds/lightOFF.mp4');

  toggleSwitch(isNeon: boolean){
    if(isNeon) this.turnON.play();
    else this.turnOFF.play();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (event.key === ' ') {
      this.isDarkMode = !this.isDarkMode;
      this.toggleSwitch(this.isDarkMode);
    }

    if(event.key === ' ') event.preventDefault(); // Prevent scrolling when pressing space

  }

}
