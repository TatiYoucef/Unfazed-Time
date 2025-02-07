import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gears',
  standalone: true,
  imports: [],
  templateUrl: './gears.component.html',
  styleUrl: './gears.component.css'
})
export class GearsComponent {

  @Input() top = '0';
  @Input() right = '0';
  @Input() fontSize = 30;
  @Input() margin = 0;
  @Input() left = '0' ;

}
