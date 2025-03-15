import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { MonthPacket, QuizDay } from '../models/types';

@Injectable({
  providedIn: 'root'
})

export class FetchModulesService {

  http = inject(HttpClient);

  fetchAllEnigmas(){
    
    const url = "http://localhost:3000/api/quiz";

    return this.http.get<Array<MonthPacket>>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  fetchlistMonth(month:number){
    
    const url = `http://localhost:3000/api/quiz/${month}`;


    return this.http.get<MonthPacket>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }

  fetchdailyEnigma(month:number, day:number){
    
    const url = `http://localhost:3000/api/quiz/${month}/${day}`;


    return this.http.get<QuizDay>(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }
}
