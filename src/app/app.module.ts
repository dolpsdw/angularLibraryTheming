import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SportsbookModule } from 'sportsbook';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SportsbookModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
