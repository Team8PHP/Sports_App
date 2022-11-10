import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AllLeaguesListComponent } from './Components/all-leagues-list/all-leagues-list.component';
import { StandingsComponent } from './Components/standings/standings.component';
import { TopPlayersComponent } from './Components/top-players/top-players.component';
import { LeagueComponent } from './Components/league/league.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    CalenderComponent,
    AllLeaguesListComponent,
    MatchListComponent,
    StandingsComponent,
    TopPlayersComponent,
    MatchListComponent,
    LeagueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
