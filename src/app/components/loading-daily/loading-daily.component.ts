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
    "Finally, responsivity has been added on phone",
    "366 days, (366?) shards, (366?) challenges... can you collect them all?",
    "30/04...",
    "you have infinite tries, no worry for failing and trying!!!",
    "TADC episode 7 is still haunting me...",
    "which would come first, you finishing moon quest, or me propo-",
    "is it new year already ?",
    "let's sit on that bench again, I may need it every day...",
    "How many stars are there I wonder...",
    "In real story, Byul's real riddles are challenges to how to reach these scatered shards",
    "Lower and upper cases are not sensitive in your answers, also same for external spaces",
    "I may have expressed way so much on 19/12...",
    "The walk of 1927 should be our side-joke",
    "wasn't there a weird crypted mail somewhere?",
    "태양이 그렇게 진실하고 순수하게 웃는 것을 보니 더 행복할 수가 없습니다.",
    "Around a time before the past and present, the Sun ceased to exist too...",
    "All of above, so all of below, Sun and Moon shall meet yet again",
    "wait, if the year has 366 days = 366 shards, whare's the last one...",
    "Gooseworkx I swear if I find you I WILL TEAR YOU TO PIE-",
    "Neons are pure and innocent in nature, they are magneted to positivity just like how they love Byul",
    "Omg, my unique VIP guest just came in, EVERYONE STAY CALM",
    "I will abstract with you, yes, that's my answer",
    "Background random icon images in achievements page might hint you the content",
    "Collect Neons, they will make your progress page look more and more appealing!!",
    "a sneaky fragment might have lost in timespace, maybe Byul can found out where he got hidden ?"
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
