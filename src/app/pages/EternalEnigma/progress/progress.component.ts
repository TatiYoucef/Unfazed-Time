import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { FetchModulesService } from '../../../services/fetch-modules.service';
import { MonthPacket } from '../../../models/types';
import { LoadingDailyComponent } from "../../../components/loading-daily/loading-daily.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-progress',
  standalone: true,
  imports: [LoadingDailyComponent, CommonModule],
  templateUrl: './progress.component.html',
  styleUrl: './progress.component.scss'
})
export class ProgressComponent implements OnInit {

  isStarted: boolean = false;

  fetchServices = inject(FetchModulesService);
  monthPack !: Array<MonthPacket>;
  currentMonthIndex = 0; // Assuming January is the first month

  ngOnInit(): void {
    
    this.fetchServices.fetchAllEnigmas().subscribe((liste) => {
      this.monthPack = liste;
      this.isStarted = true; // Set to true after fetching enigmas
    });

  }

  nextMonth() {
    this.currentMonthIndex = (this.currentMonthIndex + 1) % 12;
  }

  previousMonth() {
    this.currentMonthIndex = (this.currentMonthIndex + 11) % 12;
  }

  @ViewChild('tooltip') tooltipRef!: ElementRef<HTMLDivElement>;
  positionClass: string = 'below'; // or 'above', 'left', etc.

  adjustPosition(){
    const tooltip = this.tooltipRef.nativeElement;
    const rect = tooltip.getBoundingClientRect();

    // Default position
    this.positionClass = 'below';

    // Check for right overflow
    if (rect.right > window.innerWidth) {
      this.positionClass = 'shift-left';
    }

    // Check for left overflow
    if (rect.left < 0) {
      this.positionClass = 'shift-right';
    }
  }

}
