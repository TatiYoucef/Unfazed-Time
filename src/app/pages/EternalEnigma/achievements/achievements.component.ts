import { Component, inject, OnInit } from '@angular/core';
import { Achievements } from '../../../models/types';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { lastValueFrom } from 'rxjs';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule,LoadingDailyComponent],
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

  colors = ['#ffffff', '#a0c4ff', '#bdb2ff', '#ffd6a5', '#ffc6ff'];
  totalStars = 120;

  stars = Array.from({ length: this.totalStars }, () => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,                // random pixel size
    color: this.colors[Math.floor(Math.random() * this.colors.length)],
    delay: Math.random() * 5,                   // flicker delay
    duration: Math.random() * 3 + 2,            // flicker speed
    layer: Math.floor(Math.random() * 3) + 1    // 1, 2, or 3 depth
  }));

}
