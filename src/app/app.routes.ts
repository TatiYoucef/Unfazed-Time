import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path :'clock' , //Hash(Time)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/OldEnigma/clock-tower/clock-tower.component");
      return m.ClockTowerComponent;
    }
  },

  {
    path :'promisedPresent' , //Hash(141414 Blessing)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/OldEnigma/trials-end/trials-end.component");
      return m.TrialsEndComponent;
    }
  },

  {
    path :'3c59dc048e8850243be8079a5c74d0792b7f380c4a07a500b6a3e5f7b87ffa34' , //Hash(21)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/on-day/on-day.component");
      return m.OnDayComponent;
    }
  },

  {
    path :'e2a2adf7dc58572efeb255e169e172b00ea8dbaa0e626d80a3b9f2b3d475c3b6' , //Hash(future)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/on-after/on-after.component");
      return m.OnAfterComponent;
    }
  },

  //----------------------------HOME------------------------------------

  {
    path :'home' , // Hash(Chiamoi)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/log-in/log-in.component");
      return m.LogInComponent;
    }
  },

  // {
  //   path :'home/dailyQuiz' , 
  //   pathMatch: 'full', 
  //   loadComponent: async () => {
  //     const m = await import("./pages/EternalEnigma/daily-quiz/daily-quiz.component");
  //     return m.DailyQuizComponent;
  //   }
  // },

  // {
  //   path :'home/dailyQuiz/hints' , 
  //   pathMatch: 'full', 
  //   loadComponent: async () => {
  //     const m = await import("./pages/EternalEnigma/hints/hints.component");
  //     return m.HintsComponent;
  //   }
  // },

  //-----------------------------ENIGMAS-------------------------

  { //06 Avril: 06/04
    path :'plainedGrass' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/shaymin/shaymin.component");
      return m.ShayminComponent;
    }
  },
  { //23 Avril: 23/04
    path :'' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/root/root.component");
      return m.RootComponent;
    }
  },
  { //30 Avril: 30/04
    path :'MjE3NDM1Cg==' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/sun-secret/sun-secret.component");
      return m.SunSecretComponent;
    }
  },
  { //01 May: 01/05
    path :'games/RPS' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/rock-paper-scis/rock-paper-scis.component");
      return m.RockPaperScisComponent;
    }
  },
  { //02 May: 02/05
    path :'games/annoyingButton' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/annoyingbutton/annoyingbutton.component");
      return m.AnnoyingbuttonComponent;
    }
  },
  { //05 May: 05/05
    path :'games/guess' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/guess-number/guess-number.component");
      return m.GuessNumberComponent;
    }
  },
  { //14 May: 14/05
    path :'games/reflexe' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/reflexe/reflexe.component");
      return m.ReflexeComponent;
    }
  },
  { //24 May: 24/05
    path :'games/maths' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/maths/maths.component");
      return m.MathsComponent;
    }
  },
  { //14 Juin: 14/06
    path :'Void' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/void/void.component");
      return m.VoidComponent;
    }
  },
  { //30 September: 30/09
    path :'games/dice' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/dice/dice.component");
      return m.DiceComponent;
    }
  },

];
