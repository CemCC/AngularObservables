import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Selection } from '../model/selections';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class GetSelectionsService {

  constructor(private http: HttpClient) { }
  private selectionsUrl = '../assets/data/db.json';  // URL to web api
 
  public getSelections():Observable<Selection[]>{
    return this.http.get<Selection[]>(this.selectionsUrl)
    .map(selectionsresponse => selectionsresponse['Selections'])
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
