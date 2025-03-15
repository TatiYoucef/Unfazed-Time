import { Component, ElementRef, HostListener, inject, OnInit, ViewChild } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FetchModulesService } from '../../services/fetch-modules.service';
import { MonthPacket, QuizDay } from '../../models/types';

@Component({
  selector: 'app-daily-quiz',
  standalone: true,
  imports: [LoadingScreenComponent, FormsModule, CommonModule],
  templateUrl: './daily-quiz.component.html',
  styleUrl: './daily-quiz.component.scss'
})
export class DailyQuizComponent implements OnInit {

  url="../../../assets/Images/Cina.png";

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
        this.displayNotification(this.enigma.reaction , true);
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
    setTimeout(() => {
      this.showNotification = false;
    }, 3000); // Hide after 3 seconds
  }



  fetchServices = inject(FetchModulesService);
  enigma !: QuizDay;
  monthPack !: MonthPacket;

  ngOnInit(): void {
    
    this.fetchServices.fetchlistMonth(4).subscribe((liste) => {
      this.monthPack = liste;
    });

    this.fetchServices.fetchdailyEnigma(4,6).subscribe((quiz) => this.enigma = quiz);


  }

}
