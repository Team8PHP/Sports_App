import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/views/league/league.component';
import { StandingsComponent } from './components/views/standings/standings.component';
import { TopPlayersComponent } from './components/views/top-players/top-players.component';

@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    StandingsComponent,
    TopPlayersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
