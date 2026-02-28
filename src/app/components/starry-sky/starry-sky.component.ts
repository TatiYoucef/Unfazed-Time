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

  stars: Star[] = [];

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
  }
}
