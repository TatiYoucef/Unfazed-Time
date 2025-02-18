import { Component } from '@angular/core';
import { LoadingScreenComponent } from "../../components/loading-screen/loading-screen.component";

@Component({
  selector: 'app-on-day',
  standalone: true,
  imports: [LoadingScreenComponent],
  templateUrl: './on-day.component.html',
  styleUrl: './on-day.component.css'
})
export class OnDayComponent {

  isrevealed = false;


  revealSound = new Audio('../../../assets/Sounds/SSBU.mp3');
  text="20";

  heartClicked(){

    this.isrevealed = true;
    this.revealSound.play();

    setTimeout(() => { 

      this.text = "21"; //timeout

    },
    2000);


  }

}
