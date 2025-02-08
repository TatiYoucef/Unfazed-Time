import { Component, HostListener, inject, OnInit } from '@angular/core';
import { GearsComponent } from "../../components/gears/gears.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock-tower',
  standalone: true,
  imports: [GearsComponent, FormsModule],
  templateUrl: './clock-tower.component.html',
  styleUrl: './clock-tower.component.css',

})
export class ClockTowerComponent implements OnInit{

  weekday = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  ];

  d = new Date() ;
  h = this.d.getHours();
  m = this.d.getMinutes();
  s = this.d.getSeconds();
  date = this.d.getDate();
  month = this.d.getMonth() + 1;
  year = this.d.getFullYear();
  day = this.weekday[this.d.getDay()];

  hDeg = this.h * 30 + this.m * (360/720);
  mDeg = this.m * 6 + this.s * (360/3600);
  sDeg = this.s * 6;

  emptyList = Array<number>(59);

  isSolved = false;
  isEntered = false;
  isUnlocked = false; 

  tickSound = new Audio('../../../assets/Sounds/TickSound.mp4');
  entrySound = new Audio('../../../assets/Sounds/WelcomeToClockTower.mp4');
  rainStorm = new Audio('../../../assets/Sounds/RainStorm.mp4');
  woodC1 = new Audio('../../../assets/Sounds/WoodCreak1.mp4');
  woodC2 = new Audio('../../../assets/Sounds/WoodCreak2.mp4');
  suspense = new Audio('../../../assets/Sounds/Suspense.mp4');
  openLock = new Audio('../../../assets/Sounds/OpenLock.mp4');
  openDoorSound= new Audio('../../../assets/Sounds/OpenDoor.mp4');
  solvedSound= new Audio('../../../assets/Sounds/PuzzleSolved.mp4');
  clickSound= new Audio('../../../assets/Sounds/Click.wav');

  allowTicks = true;
  allowRain = true;

  RainToggled(){
    this.allowRain = !this.allowRain;

    if(this.allowRain) this.rainStorm.play();
    else this.rainStorm.pause();
  }

  listMusics = Array<HTMLAudioElement>(0);
  selectedOst = 0;

  toggleOst(i:number){

    if(this.selectedOst != 0){
      this.listMusics[this.selectedOst-1].currentTime = 0;
      this.listMusics[this.selectedOst-1].pause();
    }

    if(this.selectedOst != i+1){
      this.selectedOst = i+1;
      this.listMusics[i].play();
    }else this.selectedOst = 0;

  }

  router = inject(Router);

  onHover(){
    this.suspense.play()
  }

  onLeave(){
    this.suspense.pause();
    this.suspense.currentTime = 0;
  }

  openDoor(){
    this.suspense.pause();
    this.suspense.currentTime = 0;
    this.openDoorSound.play();
    this.isEntered = true;

    setTimeout(() => { 
      this.entrySound.play();
      this.rainStorm.loop = true;
      this.rainStorm.play();
      this.clock();
    },
    3000);

  }

  ngOnInit(): void {

    this.listMusics.push(
      new Audio('../../../assets/Sounds/LM3.mp4'),
      new Audio('../../../assets/Sounds/OOT.mp4'),
      new Audio('../../../assets/Sounds/GIOC.mp4'),
    )

    for (let i = 0; i < this.listMusics.length; i++) {
      
      this.listMusics[i].loop = true;
      
    }

    for (let i = 1; i < 60; i++) {
      
      this.emptyList[i] = i;
      
    }
  }

  clock() {

    setTimeout(() => { 
      if(!this.isSolved) this.clock();
    },
    1000);

    this.d = new Date() ;
    this.h = this.d.getHours();
    this.m = this.d.getMinutes();
    this.s = this.d.getSeconds();
    this.date = this.d.getDate();
    this.month = this.d.getMonth() + 1;
    this.year = this.d.getFullYear();

    this.hDeg = this.h * 30 + this.m * (360/720);
    this.mDeg = this.m * 6 + this.s * (360/3600);
    this.sDeg = this.s * 6;
    this.day = this.weekday[this.d.getDay()];

    if(this.allowTicks) this.tickSound.play();

    if(this.s == 0) this.woodC1.play();
    if(this.s == 30) this.woodC2.play();
  }


  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {

    if (event.key === ' ' && this.isEntered && this.h === 14 && this.m === 14 && this.s === 14) {
      this.isSolved = true;
      this.solvedSound.play();
      this.rainStorm.pause();
      if(this.selectedOst != 0) this.listMusics[this.selectedOst-1].pause();

      setTimeout(() => { 
        this.clickSound.play();
        this.router.navigate(['trial']);
      },
      4000);

    }

    if(event.key === ' ') event.preventDefault(); // Prevent scrolling when pressing space

  }

}
