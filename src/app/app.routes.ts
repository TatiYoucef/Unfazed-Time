import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path :'' , // Hash(Chiamoi)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/log-in/log-in.component");
      return m.LogInComponent;
    }
  },

  {
    path :'clock' , //Hash(Time)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/clock-tower/clock-tower.component");
      return m.ClockTowerComponent;
    }
  },

  {
    path :'trial' , //Hash(141414 Blessing)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/trials-end/trials-end.component");
      return m.TrialsEndComponent;
    }
  },

  {
    path :'inDay' , //Hash(21)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/on-day/on-day.component");
      return m.OnDayComponent;
    }
  },

  {
    path :'afterDay' , //Hash(future)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/on-after/on-after.component");
      return m.OnAfterComponent;
    }
  },

];
