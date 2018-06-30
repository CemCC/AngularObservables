import { Component } from '@angular/core';
import { GetSelectionsService } from '../services/get-selections.service';
import { Selections } from '../model/selections';
import { Observable, Subscription } from "rxjs/Rx"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  public selections: Selections[]
  constructor( private selectionService: GetSelectionsService ){}

  ngOnInit() {
     this.selectionService.getSelections().subscribe(Selections => {
      this.selections = Selections['Selections'];
     });
  }
}
