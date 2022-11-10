import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeagueComponent } from './components/views/league/league.component';
import { StandingsComponent } from './components/views/standings/standings.component';
import { TopPlayersComponent } from './components/views/top-players/top-players.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { WrapperComponent } from './components/views/wrapper/wrapper.component';


@NgModule({
  declarations: [
    AppComponent,
    LeagueComponent,
    StandingsComponent,
    TopPlayersComponent,
    WrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
