import { Component, HostListener, inject, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Achievements } from '../../../models/types';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";

@Component({
  selector: 'app-neons',
  standalone: true,
  imports: [LoadingDailyComponent],
  templateUrl: './neons.component.html',
  styleUrl: './neons.component.scss'
})
export class NeonsComponent implements OnInit {

  isStarted: boolean = false;
  achievements !: Achievements;
  fetchServices = inject(FetchModulesService);

  async ngOnInit() {
    try {

      // Fetch achievements
      const achieve = await lastValueFrom(this.fetchServices.fetchAchievements());
      this.achievements = achieve;
      this.percentage = ((this.achievements.nbrSolved / 367) * 100);
      this.isStarted = true;


    } catch (error) {
      console.error("Error in ngOnInit:", error);
    }
  }

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

    if (event.key === ' ') {
      this.isDarkMode = !this.isDarkMode;
      this.toggleSwitch(this.isDarkMode);
    }

    if(event.key === ' ') event.preventDefault(); // Prevent scrolling when pressing space

  }
}
