import { Component, OnInit } from '@angular/core';
import { GearsComponent } from "../../components/gears/gears.component";

@Component({
  selector: 'app-clock-tower',
  standalone: true,
  imports: [GearsComponent],
  templateUrl: './clock-tower.component.html',
  styleUrl: './clock-tower.component.css'
})
export class ClockTowerComponent implements OnInit{

  weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
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

 tickSound = new Audio('../../../assets/Sounds/TickSound.mp4')

  ngOnInit(): void {
    for (let i = 1; i < 60; i++) {
      
      this.emptyList[i] = i;
      
    }
    this.clock();
  }

  clock() {

    setTimeout(() => { 
      this.clock()
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

    this.tickSound.play();
  }

}
