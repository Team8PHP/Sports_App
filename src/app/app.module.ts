import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { LeaguesTableComponent } from './Components/leagues-table/leagues-table.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    CalenderComponent,
    LeaguesTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
