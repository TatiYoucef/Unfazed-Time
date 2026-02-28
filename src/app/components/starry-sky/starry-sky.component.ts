import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Star {
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  layer: number;
}

@Component({
  selector: 'app-starry-sky',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './starry-sky.component.html',
  styleUrl: './starry-sky.component.scss'
})
export class StarrySkyComponent implements OnInit {
  @Input() totalStars = 120;
  @Input() colors: string[] = ['#ffffff', '#a0c4ff', '#bdb2ff', '#ffd6a5', '#ffc6ff'];
  @Input() showMilkyWay = true;

  stars: Star[] = [];
  clusterStars: Star[] = [];

  ngOnInit(): void {
    this.stars = Array.from({ length: this.totalStars }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      color: this.colors[Math.floor(Math.random() * this.colors.length)],
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      layer: Math.floor(Math.random() * 3) + 1
    }));

    if (this.showMilkyWay) {
      this.clusterStars = this.generateMilkyWayStars();
    }
  }

  /** Approximate gaussian using Central Limit Theorem (sum of 6 uniforms). */
  private gaussianRandom(): number {
    let sum = 0;
    for (let i = 0; i < 6; i++) sum += Math.random();
    return (sum - 3) / 3; // roughly in [-1, 1]
  }

  /**
   * Generate a dense band of tiny stars along the Milky Way diagonal
   * (bottom-left → top-right, matching the CSS rotation of -35 deg).
   */
  private generateMilkyWayStars(): Star[] {
    const result: Star[] = [];
    const count = 250;
    const bandAngle = 35 * Math.PI / 180;

    for (let i = 0; i < count; i++) {
      const t = Math.random();
      // Band centerline: (0 %, 90 %) → (100 %, 10 %)
      const cx = t * 130 - 15;
      const cy = 90 - 80 * t;

      // Gaussian scatter perpendicular to the band
      const scatter = this.gaussianRandom() * 14;
      const x = cx + scatter * Math.sin(bandAngle);
      const y = cy + scatter * Math.cos(bandAngle);

      if (x >= 0 && x <= 100 && y >= 0 && y <= 100) {
        const nearCenter = Math.abs(scatter) < 5;
        result.push({
          x, y,
          size: nearCenter ? Math.random() * 1.5 + 0.4 : Math.random() * 0.8 + 0.2,
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2,
          layer: Math.floor(Math.random() * 3) + 1
        });
      }
    }

    return result;
  }
}
