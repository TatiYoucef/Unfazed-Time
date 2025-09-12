import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-daily',
  standalone: true,
  imports: [],
  templateUrl: './loading-daily.component.html',
  styleUrl: './loading-daily.component.scss'
})
export class LoadingDailyComponent implements OnInit {

  listTips = [
    "don't forget to use hints if you get stuck!!!",
    "366 days, (366?) shards, (366?) challenges... can you collect them all?",
    "30/04...",
    "you have infinite tries, no worry for failing and trying!!!",
    "the moon quest was actually an idea came from you",
    "which would come first, you finishing moon quest, or me propo-",
    "Sun just woke up, where she will glowing on moon again today",
    "secrets everywhere...",
    "Loading might take long cause Backend server needs about a minute to fetch the daily quest",
    "Some shards might hold special memories rather than challenges...",
    "Lower and upper cases are not sensitive in your answers, also same for external spaces",
    "hope the kitten found her mom...",
    "Just daydreamed how I can see that smile again...",
    ".. / .... . .- .-. -.. / - .... . / -- --- --- -. / .... .. -.. . -.. / .- / ...- .- ..- .-.. - / ... --- -- .-- .... . .-. . / .. -. / - .... .. ... / --. .-.. --- -... . .-.-.- .-.-.- .-.-.-",
    "태양이 그렇게 진실하고 순수하게 웃는 것을 보니 더 행복할 수가 없습니다.",
    "Around a time before the past and present, the Sun ceased to exist too...",
    "All of above, so all of below, Sun and Moon shall meet yet again",
    "wait, if the year has 366 days = 366 shards, whare's the last one...",
    "if you have patience, I hope you will witness all my expresions implemented in this agenda",
    "Byul felt lonely, so she made a neon Cina as company",
    "feeling tired of everything ? Open a balcony, gaze the night sky, breath, the hardships are not worth to feel broken",
    "I wonder if you already got bored, this was my anxiety when you try these small riddles",
    "Background random icon images in achievements page might hint you the content",
    "Collect Neons, they will make your progress page look more and more appealing!!",
    "you might have lost your time travel powers in this journey, but it was maybe replaced by something else..."
  ]

  currentTip: string = '';
  currentIndex: number = 0;
  shuffledIndexes: number[] = [];

  shuffle() {
    this.shuffledIndexes = this.listTips.map((_, i) => i);
    for (let i = this.shuffledIndexes.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.shuffledIndexes[i], this.shuffledIndexes[j]] = [this.shuffledIndexes[j], this.shuffledIndexes[i]];
    }
    this.currentIndex = 0;
  }

  showNext() {
    if (this.currentIndex >= this.shuffledIndexes.length) {
      this.shuffle(); // reshuffle when done
    }

    const index = this.shuffledIndexes[this.currentIndex];
    this.currentTip = this.listTips[index];
    this.currentIndex++;
  }

  ngOnInit(): void {
    this.shuffle();
    this.showNext();
    setInterval(() => {
      this.showNext();
    }, 14000); // Change tip every 5 seconds
  }

}
