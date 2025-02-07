import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trials-end',
  standalone: true,
  imports: [],
  templateUrl: './trials-end.component.html',
  styleUrl: './trials-end.component.css'
})
export class TrialsEndComponent implements OnInit {

  isOpened = false;

  hDeg = 14 * 30 + 14 * (360/720);
  mDeg = 14 * 6 + 14 * (360/3600);
  sDeg = 14 * 6;

  emptyList = Array<number>(59);

  openLock = new Audio('../../../assets/Sounds/OpenLock.mp4');
  keyObtainedSound = new Audio('../../../assets/Sounds/KeyGotten.mp4');

  ngOnInit(): void {

    for (let i = 1; i < 60; i++) {
      this.emptyList[i] = i;
    }

  }

  OpenClock(){
    this.isOpened = true;
    this.openLock.play();

    setTimeout(() => { 
      this.keyObtainedSound.play();
    },
    3000);

  }

}
