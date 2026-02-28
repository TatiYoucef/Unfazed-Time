import { Component, inject, OnInit } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent implements OnInit{

  isLoggedIn = false;
  isDay = false;
  isClose = false; 

  weirdText = "??????";
  cptW = 0;
  didHover = false;
  listWeird = [
    "DO",
    "NOT",
    "STALK",
  ]
  url="../../../assets/Images/Cina.png";

  d = Math.floor(new Date().getTime() / 1000); //current date
  dCh = Math.floor(new Date(2026,3,10,0,0,0,0).getTime() / 1000); //Buyel Date
  //dCh = new Date(2025,1,19,20,59,0,0).getTime() / 1000; //Buyel Date

  cpt=0;
  text="So this is it...";
  listText = [
    "So this is it...",
    "You have waited this long...",
    "You believed since the beginning...",
    "I just have no words...",
    "As time getting closer...",
    "I will keep praying nchllh our link will surely happen...",
    "cause even now you do things nobody could do for me...",
    "Such a faithful and beautiful heart shouldn't close eye on...",
    "Happy Birthday Chaima !!!",
    "And from bottom of my heart...",
    "Thank you so much for existing and being you !"
  ]

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

    if(this.d - 24*3600 > this.dCh){ //Day has finished

      this.router.navigate(['e2a2adf7dc58572efeb255e169e172b00ea8dbaa0e626d80a3b9f2b3d475c3b6'])

    }else if(this.d - this.dCh <= 24*3600 && this.d - this.dCh >= 0){ //In the day

      this.listMusics[this.listMusics.length - 1].pause();
      this.isDay = true;
      this.router.navigate(['3c59dc048e8850243be8079a5c74d0792b7f380c4a07a500b6a3e5f7b87ffa34']);


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
        this.isClose = true;
        this.launchSetup();
      }

    }

  }

  launchSetup(){

    this.text = this.listText[this.cpt];
    this.cpt++;

    setTimeout(() => { 
      if(this.cpt <= this.listText.length - 1)this.launchSetup();
    },
    8000);

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
  
  behaveWeird(){
    this.didHover = true;
    this.weirdText = this.listWeird[this.cptW];
    this.cptW = (this.cptW + 1) % this.listWeird.length;

    setTimeout(() => { 
      if(this.didHover) this.behaveWeird();
    },
    500);
    
  }

  weirdClicked(){
    alert("Shhhhh, patience is the key, hhh")
  }

}
