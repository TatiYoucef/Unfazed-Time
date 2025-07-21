export type Achievements = {
  nbrSolved: number;
  Streak: number;
  BestStreak: number;
  nbrFailures: number;
  BrokenStreak: boolean;
  EarlyBird: boolean;
  NightOwl: boolean;
};

export type QuizDay = {

  day: number,
  title: String,
  difficulty: String,
  solved: boolean,
  cDay: String,
  sYear: number,
  
  specialMess: String,
  enigma: String,
  link: string,
  hints: Array<String>,

  answer: String,
  reaction: String

}

export type MonthPacket = {

  month: number,
  solvedOne: boolean,
  name: String,
  Theme: String,
  days: Array<QuizDay>,
  
}