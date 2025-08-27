import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { Achievements, MonthPacket, QuizDay } from '../models/types';

@Injectable({
  providedIn: 'root'
})

export class FetchModulesService {

  http = inject(HttpClient);

  fetchDate() {

    const url = "https://temple-of-time-vault.onrender.com/api/date";

    return this.http.get<{ date: string }>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  fetchAchievements() {

    const url = "https://temple-of-time-vault.onrender.com/api/achievements";

    return this.http.get<Achievements>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  setStreak(nbr: number){
    const url = `https://temple-of-time-vault.onrender.com/api/achievements/streak/${nbr}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setFails(nbr: number){
    const url = `https://temple-of-time-vault.onrender.com/api/achievements/nbrFails/${nbr}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setEarlyBird(status: boolean){
    const url = `https://temple-of-time-vault.onrender.com/api/achievements/earlyBird/${status}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  setNightOwl(status: boolean){
    const url = `https://temple-of-time-vault.onrender.com/api/achievements/nightOwl/${status}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );
  }

  fetchAllEnigmas(){
    
    const url = "https://temple-of-time-vault.onrender.com/api/quiz";

    return this.http.get<Array<MonthPacket>>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  fetchlistMonth(month:number){
    
    const url = `https://temple-of-time-vault.onrender.com/api/quiz/${month}`;


    return this.http.get<MonthPacket>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  fetchdailyEnigma(month:number, day:number){
    
    const url = `https://temple-of-time-vault.onrender.com/api/quiz/${month}/${day}`;


    return this.http.get<QuizDay>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  solveEnigma(month:number, day:number, sYear:number){
      
    const url = `https://temple-of-time-vault.onrender.com/api/quiz/${month}/${day}/solve/${sYear}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }
}
