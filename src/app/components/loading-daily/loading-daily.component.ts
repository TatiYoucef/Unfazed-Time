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
    "(366?) days, (366?) shards, (366?) challenges... can you collect them all?",
    "30/04...",
    "you have infinite tries, no worry for failing and trying!!!",
    "so ummm, how was your day?",
    "the moon quest was actually an idea came from you",
    "which would come first, you finishing moon quest, or me propo-",
    "Sun just woke up, where she will glowing on moon again today",
    "secrets everywhere...",
    "Database file is about 6009 lines!!!",
    "Loading might take long cause Backend server needs about a minute to fetch the daily quest",
    "Moon quest was referenced on a true stroy",
    "Some shards might hold special memories rather than challenges...",
    "Lower and upper cases are not sensitive in your answers, also same for external spaces",
    "hope the kitten found her mom...",
    "This tip is totally useless, but I helped wasting your time waiting for the quest to load :3",
    "내  햇빛이  나를  인도하길",
    "All of above, as all of below, Sun and Moon shall meet yet again",
    "if your intuition leads you to uncertainty, follow it, the answers you seek could be anywhere",
    "patience is the key",
    "Neon arts have a secret if you click on them...",
    "Don't close eye, you might haved missed something crucial to the lore",
    "$@>6E9:?8 23@FE `c D9@F=5 6I:DE 2D <6J E@ D@>6 D64C6E]]]",
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
