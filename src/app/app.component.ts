import { Component } from '@angular/core';
import { GetSelectionsService } from '../services/get-selections.service';
import { Selections } from '../model/selections';
import { Observable } from "rxjs/Rx"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public selections$ : Observable<Selections[]>;
  constructor( private selectionService: GetSelectionsService ){}

  ngOnInit() {
    this.selections$ = this.selectionService.getSelections();
  }
}
