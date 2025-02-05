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

];
