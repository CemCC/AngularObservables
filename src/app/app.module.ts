import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetSelectionsService } from '../services/get-selections.service';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchSelectionsPipe }  from '../pipes/search-selections.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchSelectionsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [GetSelectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
