import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { Achievements, MonthPacket, QuizDay } from '../../../models/types';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";

@Component({
  selector: 'app-daily-quiz',
  standalone: true,
  imports: [FormsModule, CommonModule, LoadingDailyComponent],
  templateUrl: './daily-quiz.component.html',
  styleUrl: './daily-quiz.component.scss'
})
export class DailyQuizComponent implements OnInit {

  url="../../../../assets/Images/Cina.png";
  solvedSound = new Audio('../../../../assets/Sounds/quizSolved.mp4');

  input = "";

  @ViewChild('formContainer') formContainer!: ElementRef;
  @HostListener('document:mousedown', ['$event'])
  onClickOutside(event: MouseEvent) {
    setTimeout(() => {
      if (this.formContainer && !this.formContainer.nativeElement.contains(event.target)) {
        this.resetForm();
      }
    }, 50); // Short delay to allow button interactions
  }

  resetForm() {
    this.input = ''; // Clear input
    const checkbox = document.getElementById('checkbox') as HTMLInputElement;
    if (checkbox) {
      checkbox.checked = false; // Uncheck the form toggle
    }
  }

  @ViewChild('notificationBar') notificationBar!: ElementRef;
  showNotification: boolean = false;
  notificationMessage: String = '';
  isSuccess: boolean = false;

  async isPreviousSolved(day: number, month: number): Promise<boolean> {
    if(day === 14 && month === 14) return true;

    if (day != 1) {
      const previousDay = this.monthPack.days[day - 2];
      return previousDay.solved;
    } else {
      let previousMonth = month - 1;
      if (previousMonth === 0) previousMonth = 12;

      try {
        const prevMonth = await lastValueFrom(this.fetchServices.fetchlistMonth(previousMonth));
        const previousDay = prevMonth.days[prevMonth.days.length - 1];
        console.log("previousDay", previousDay);
        return previousDay.solved;
      } catch (error) {
        console.error("Error fetching previous month:", error);
        return false; // Fallback
      }
    }
  }

  testSubmit(){
  
    switch (this.input.trim().toLowerCase()) {

      case this.enigma.answer.trim().toLowerCase() :

        if(!this.enigma.solved){
          
          this.fetchServices.solveEnigma(this.month,this.date,this.year).subscribe(() => {
            this.solvedSound.play();
            this.enigma.solved = true;
            this.enigma.sYear = this.year;
            let Streak = this.achievements.Streak;
            if(this.isBeforeSolved) Streak++;
            else Streak = 1; // Reset streak if it was broken

            console.log("New Streak: ", Streak);
            this.fetchServices.setStreak(Streak).subscribe(() =>{
              this.displayNotification(this.enigma.reaction , true);
              this.achievements.Streak = Streak;
              this.achievements.nbrSolved++;
            });

            if(this.h >=22) this.fetchServices.setNightOwl(true).subscribe(() => {});
            if(this.h >= 3 &&  this.h < 6) this.fetchServices.setEarlyBird(true).subscribe(() => {});
            if(this.month === 14 && this.date === 14) this.fetchServices.setSecretDay(true).subscribe(() => {});
          });

        } else {
          this.solvedSound.play();
          this.displayNotification(this.enigma.reaction , true);
        }

      break;

      case '':
        this.displayNotification('You should submit your guess first !!', false);
      break;

      default:
        this.fetchServices.setFails(this.achievements.nbrFailures + 1).subscribe(() => {
          this.achievements.nbrFailures++;
          this.displayNotification("Don't worry, you have infinite of tries !!!", false);
        });
      break;
    }

  }

  displayNotification(message: String, success: boolean) { //display div
    this.notificationMessage = message;
    this.isSuccess = success;
    this.showNotification = true;

    if(!this.isSuccess){

      setTimeout(() => {
        this.showNotification = false;
      }, 3000); // Hide after 3 seconds

    } else {

      setTimeout(() => {
        this.showNotification = false;
      }, 6000); // Hide after 3 seconds

    }


  }

  fetchServices = inject(FetchModulesService);
  enigma !: QuizDay;
  monthPack !: MonthPacket;
  achievements !: Achievements;

  d = new Date() ;
  h = this.d.getHours();
  m = this.d.getMinutes();
  s = this.d.getSeconds();
  date !: number;
  month !: number;
  year !: number;

  isStarted: boolean = false;
  isBeforeSolved: boolean = false;

  rout = inject(ActivatedRoute);
  async ngOnInit() {

    this.rout.paramMap.subscribe((params) =>{

      this.month = Number(params.get("month")); 
      this.date = Number(params.get("day"));

    });

    //if no parameters are given, we assume it's the current day
    if(!this.month || !this.date){ // we fetch

      [this.year, this.month, this.date] = await lastValueFrom(this.fetchServices.fetchDate()).then(dateResponse => {
        const [year, month, day] = dateResponse.date.split('-').map(Number);
        return [year, month, day];
      });
    }

    console.log("Current Month: ", this.month);
    console.log("Current Day: ", this.date);

    try {
      // Fetch month data
      let liste = await lastValueFrom(this.fetchServices.fetchlistMonth(this.month));
      this.monthPack = liste;
      this.enigma = this.monthPack.days[this.date - 1];

      if(this.month === 14 && this.date === 14){} 
      else if(!this.enigma.solved && (this.month != this.d.getMonth() + 1 || this.date != this.d.getDate()) ){ 
        alert("You can't visit an Enigma that wasn't solved yet, nice try tho :3");
        this.router.navigate(['/home/dailyQuiz']);
      }

      // Fetch achievements
      const achieve = await lastValueFrom(this.fetchServices.fetchAchievements());
      this.achievements = achieve;
      this.percentage = ((this.achievements.nbrSolved / 367) * 100);


      // Check if previous day was solved
      this.isBeforeSolved = await this.isPreviousSolved(this.date, this.month);

      // Reset streak if needed
      if (!this.isBeforeSolved && this.achievements.Streak > 0 && !this.enigma.solved) {
        await lastValueFrom(this.fetchServices.setStreak(0));
        this.achievements.Streak = 0;
      }

      this.isStarted = true;

    } catch (error) {
      console.error("Error in ngOnInit:", error);
    }

    this.clock();
  }

  clock(){

    setTimeout(() => { 
      this.clock();
    },
    1000);

    this.d = new Date() ;
    this.h = this.d.getHours();
    this.m = this.d.getMinutes();
    this.s = this.d.getSeconds();

  }

  router = inject(Router) ;
  urlLink = window;

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

    if (event.key === ' ' && !this.isInputField(event.target)) {
      this.isDarkMode = !this.isDarkMode;
      this.toggleSwitch(this.isDarkMode);
      event.preventDefault();
    }


  }

  private isInputField(target: EventTarget | null): boolean {
    // Check if target is an input, textarea, or contenteditable element
    const element = target as HTMLElement;
    return element && (
      element.tagName === 'INPUT' ||
      element.tagName === 'TEXTAREA' ||
      element.isContentEditable
    );
  }
  
}
