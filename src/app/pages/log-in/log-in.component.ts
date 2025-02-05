import { Component } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {

}
