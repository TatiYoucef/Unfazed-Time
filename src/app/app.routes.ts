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

  {
    path :'home/dailyQuiz' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/EternalEnigma/daily-quiz/daily-quiz.component");
      return m.DailyQuizComponent;
    }
  },

  {
    path :'home/dailyQuiz/hints' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/EternalEnigma/hints/hints.component");
      return m.HintsComponent;
    }
  },

  //-----------------------------ENIGMAS-------------------------

  { //06 Avril: 06/04
    path :'plainedGrass' , 
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/Enigmas/shaymin/shaymin.component");
      return m.ShayminComponent;
    }
  },

];
