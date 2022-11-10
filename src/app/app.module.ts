import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { CalenderComponent } from './components/calender/calender.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AllLeaguesListComponent } from './components/all-leagues-list/all-leagues-list.component';
import { StandingsComponent } from './components/standings/standings.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    CalenderComponent,
    AllLeaguesListComponent,
    MatchListComponent,
   StandingsComponent,
   TopPlayersComponent,
   MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
