import { Component, inject, OnInit } from '@angular/core';
import { Achievements } from '../../../models/types';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { lastValueFrom } from 'rxjs';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";
import { CommonModule } from '@angular/common';
import { StarrySkyComponent } from '../../../components/starry-sky/starry-sky.component';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule, LoadingDailyComponent, StarrySkyComponent],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.scss'
})
export class AchievementsComponent implements OnInit {

  isStarted: boolean = false;
  achievements !: Achievements;
  fetchServices = inject(FetchModulesService);

  async ngOnInit() {
    try {

      // Fetch achievements
      const achieve = await lastValueFrom(this.fetchServices.fetchAchievements());
      this.achievements = achieve;
      this.isStarted = true;


    } catch (error) {
      console.error("Error in ngOnInit:", error);
    }
  }

}
