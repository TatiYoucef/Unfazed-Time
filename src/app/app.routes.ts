import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path :'5462ed14690a2c2dee369adde13c49f3329cb0f57f8aaf170f56a07a2f3a3469' , // Hash(Chiamoi)
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
    path :'2b2aaec9a51191c5c9ea32608edfbfce51a93ec5f332f4e28a630e5e92d2aa18' , //Hash(141414 Blessing)
    pathMatch: 'full', 
    loadComponent: async () => {
      const m = await import("./pages/trials-end/trials-end.component");
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

];
