import { Component, OnInit } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{

  isLoggedIn = false;

  d = new Date() ;
  h = this.d.getHours();
  m = this.d.getMinutes();
  s = this.d.getSeconds();

  ngOnInit(): void {
    this.clock();
  }

  clock(){

    setTimeout(() => { 
      this.clock();
    },
    1000);

    this.s--;

    if(this.s < 0){

      this.m--;
      this.s = 59;

      if(this.m < 0){
        this.h--;
        this.m = 59;

        if(this.h < 0){
          this.h = 23;
        }
      }
    }

  }

}
