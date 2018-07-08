import { Component } from '@angular/core';
import { GetSelectionsService } from '../services/get-selections.service';
import { Selection } from '../model/selections';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public selections$ : Observable<Selection[]>;
  public selectionArray : Selection[];
  public defaultOption : string;
  constructor( private selectionService: GetSelectionsService ){}

  ngOnInit() {
    this.selections$ = this.selectionService.getSelections();
   //this.defaultOption = 'number2';
  }

  /*private searchSelections( selections: Selection[]){

    //here is searching the array(condition inside the filter) and returns the results in the array.
    var searching = selections.filter(selection => selection.select == 'number2'); 
    // sets dafult option as '--All--' if given value is not matched
    if(searching.length > 0){
    this.defaultOption = searching[0].select;
    }else {
    this.defaultOption = '0';
    }
  }*/
}
