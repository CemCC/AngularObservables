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

  constructor(private http: HttpClient) { }
  private selectionsUrl = '../assets/data/db.json';  // URL to web api
 
  getSelections():Observable<Selections[]>{
    return this.http.get<Selections[]>(this.selectionsUrl)
    .catch(this.errorHandling('getSelections'))  
  }

  private errorHandling<T> (operation: string) {
    return (error: any): Observable<T> => {
      //Throwing error(That can be logged)
      console.error(`${operation} failed: ${error.statusText}, status: ${error.status}, URL: ${error.url}`); 
      return Observable.throw(error);
    };
  }

 
}
