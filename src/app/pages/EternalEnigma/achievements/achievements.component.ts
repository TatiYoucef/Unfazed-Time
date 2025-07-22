import { Component, inject, OnInit } from '@angular/core';
import { Achievements } from '../../../models/types';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { lastValueFrom } from 'rxjs';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [LoadingDailyComponent],
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
