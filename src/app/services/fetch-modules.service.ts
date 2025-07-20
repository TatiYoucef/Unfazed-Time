import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { MonthPacket, QuizDay } from '../models/types';

@Injectable({
  providedIn: 'root'
})

export class FetchModulesService {

  http = inject(HttpClient);

  getGlobalTimeParts(): void {

    this.http.get<any>('http://worldtimeapi.org/api/timezone/Africa/Algiers')
    .subscribe(response => {
        const datetime = response.datetime; // Example: "2025-07-16T12:47:22.439218+00:00"

        // Extract components using native Date
        const dateObj = new Date(datetime);

        const year = dateObj.getFullYear();
        const month = dateObj.getMonth() + 1; // Months are zero-based
        const date = dateObj.getDate();
        const hour = dateObj.getHours();
        const minute = dateObj.getMinutes();
        const second = dateObj.getSeconds();

        console.log(`Year: ${year}, Month: ${month}, Date: ${date}`);
        console.log(`Hour: ${hour}, Minute: ${minute}, Second: ${second}`);
    });
    
  }

  fetchAllEnigmas(){
    
    //equivalnt of sleep
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

  solveEnigma(month:number, day:number, sYear:number){
      
    const url = `http://localhost:3000/api/quiz/${month}/${day}/solve/${sYear}`;


    return this.http.get(url).pipe( //pipe to catch any error
      catchError((err) => {
        console.log(err);
        throw err;
      })
    );

  }
}
