import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Selections } from '../model/selections';
import { map, catchError } from 'rxjs/operators';
import { of } from "rxjs";
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GetSelectionsService {

  constructor( private http: HttpClient) { }
  private selectionsUrl = 'api/selections';  // URL to web api
 
  getSelections(): Observable <Selections[]>{
    return this.http.get<Selections[]>(this.selectionsUrl)
      .pipe(
        map((responseSelections)=> responseSelections),
        catchError(this.errorHandling('getSelections', []))
      );  
  }

  private errorHandling<T> (operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.statusText}, status: ${error.status}, URL: ${error.url}`); //Throwing error(That can be logged)
      //it returns empty results to run the App
      return of(result);
    };
  }

 
}
