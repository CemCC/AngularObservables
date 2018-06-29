import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../services/memory-data.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { GetSelectionsService } from '../services/get-selections.service';
import { FormsModule }   from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [GetSelectionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
