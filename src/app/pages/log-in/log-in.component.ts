import { Component, inject, OnInit } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent implements OnInit{

  isLoggedIn = false;
  isDay = false;
  isClose = false

  d = Math.floor(new Date().getTime() / 1000); //current date
  //dCh = Math.floor(new Date(2025,3,10,0,0,0,0).getTime() / 1000); //Buyel Date
  dCh = new Date(2025,1,18,14,3,0,0).getTime() / 1000; //Buyel Date

  j!:number
  h!:number;
  m!:number;
  s!:number;

  router = inject(Router);

  ngOnInit(): void {

    this.listMusics.push(
      new Audio('../../../assets/Sounds/Fairy.mp4'),
      new Audio('../../../assets/Sounds/Cap.mp4'),
      new Audio('../../../assets/Sounds/Wadou.mp3'),
      new Audio('../../../assets/Sounds/Rito.mp3'),
      new Audio('../../../assets/Sounds/Tears.mp4'),
      new Audio('../../../assets/Sounds/Rest.mp4'),

      new Audio('../../../assets/Sounds/LastStretch.mp4'),
    );

    for (let i = 0; i < this.listMusics.length; i++) this.listMusics[i].loop = true;
    this.listMusics[this.listMusics.length - 1].loop = false;

    this.clock();

  }

  clock(){

    setTimeout(() => { 

      if(!this.isDay) this.clock();

    },
    1000);

    this.d = Math.floor(new Date().getTime() / 1000); //current date
    console.log(this.d);

    if(this.d - 24*3600*1000 > this.dCh){ //Day has finished

      this.router.navigate(['afterDay'])

    }else if(this.d - this.dCh <= 24*3600*1000 && this.d - this.dCh >= 0){ //In the day

      this.listMusics[this.listMusics.length - 1].pause();
      this.isDay = true;
      this.router.navigate(['inDay']);


    } else { //waiting

      let diff = this.dCh - this.d;

      this.j =Math.floor(diff / (3600*24));
      diff = diff - this.j*3600*24;

      this.h = Math.floor(diff / (3600));
      diff = diff - this.h*3600;

      this.m = Math.floor(diff / 60);
      diff = diff - this.m*60;

      this.s = Math.floor(diff);

      if(this.j === 0 && this.h === 0 && this.m <=1 && this.s <= 27 && !this.isClose && this.isLoggedIn){
        this.toggleOst(this.listMusics.length - 1);
        this.isClose = true
      }

    }

  }

  listMusics = Array<HTMLAudioElement>(0);
  selectedOst = 0;

  toggleOst(i:number){

    if(!this.isClose){

      if(this.selectedOst != 0){
        this.listMusics[this.selectedOst-1].currentTime = 0;
        this.listMusics[this.selectedOst-1].pause();
      }
  
      if(this.selectedOst != i+1){
        this.selectedOst = i+1;
        this.listMusics[i].play();
  
      }else this.selectedOst = 0;

    }

  }

  goToWaitRoom() {
    this.isLoggedIn = true;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  

}
