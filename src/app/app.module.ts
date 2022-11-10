import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AllLeaguesListComponent } from './Components/all-leagues-list/all-leagues-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedMatchComponent } from './featured-match/featured-match.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedMatchComponent,
    FooterComponent,
    NavbarComponent,
    TeamComponent,
    FilterPipe,
    FavouritesComponent,
    CalenderComponent,
    AllLeaguesListComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
  ],
  providers: [],
})
export class AppModule { }
