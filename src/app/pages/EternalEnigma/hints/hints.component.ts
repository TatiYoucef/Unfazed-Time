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

}
