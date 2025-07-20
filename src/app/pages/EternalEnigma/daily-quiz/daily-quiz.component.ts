import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { MonthPacket, QuizDay } from '../../../models/types';
import { Router } from '@angular/router';
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

  testSubmit(){

    switch (this.input.trim().toLowerCase()) {

      case this.enigma.answer.trim().toLowerCase() :

        if(!this.enigma.solved){
          
          this.fetchServices.solveEnigma(this.month,this.date,this.year).subscribe((response) => {
            this.solvedSound.play();
            this.enigma.solved = true;
            this.enigma.sYear = this.year;
            this.displayNotification(this.enigma.reaction , true);
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
        this.displayNotification("Don't worry, you have infinite of tries !!!", false);
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

  d = new Date() ;
  h = this.d.getHours();
  m = this.d.getMinutes();
  s = this.d.getSeconds();
  date = this.d.getDate();
  month = this.d.getMonth() + 1;
  year = this.d.getFullYear();

  isStarted: boolean = false;

  ngOnInit(): void {
    
    this.fetchServices.fetchlistMonth(this.month).subscribe((liste) => {
      this.monthPack = liste;
    });

    this.fetchServices.fetchdailyEnigma(this.month,this.date).subscribe((quiz) => {
      this.enigma = quiz;
    });

    //simulate loading time
    setTimeout(() => {
      this.isStarted = true;
    }, 5000); // Simulate loading time of 5 seconds

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

}
