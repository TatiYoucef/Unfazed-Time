export type QuizDay = {

  day: number,
  title: String,
  difficulty: String,
  solved: boolean,
  cDay: String,
  sYear: number,
  
  specialMess: String,
  enigma: String,
  link: String,
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