import { Pipe, PipeTransform } from '@angular/core';
import { Selection } from '../model/selections';

@Pipe({
  name: 'searchSelections'
})
export class SearchSelectionsPipe implements PipeTransform {

  transform(selections: Selection[], defaultValue: string): any {
    var defaultOption: string;
   
    if(selections){
      //filtering the value
      var searching = selections.filter(selection => selection.select == defaultValue);
      
      return searching;
    } 

  }

}
