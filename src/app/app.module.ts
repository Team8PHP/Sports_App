import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatchListComponent } from './Components/match-list/match-list.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AllLeaguesListComponent } from './Components/all-leagues-list/all-leagues-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturedMatchComponent } from './Components/featured-match/featured-match.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { TeamComponent } from './team/team.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FilterPipe } from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AuthInterceptorService } from './Services/auth-interceptor.service';
import { StandingsComponent } from './Components/standings/standings.component';
import { TopPlayersComponent } from './Components/top-players/top-players.component';
import { LeagueComponent } from './Components/league/league.component';
import { GroupStandingsComponent } from './Components/group-standings/group-standings.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { FavouritesViewComponent } from './views/favourites-view/favourites-view.component';
import { ErrorComponent } from './views/error/error.component';
import { AdSpaceComponent } from './Components/ad-space/ad-space.component';
import { StandingsTopWrapperComponent } from './Components/standings-top-wrapper/standings-top-wrapper.component';
import { ClubsComponent } from './Components/clubs/clubs.component';
import { NewsCardComponent } from './components/news-card/news-card.component';
import { MainNewsComponent } from './components/main-news/main-news.component';
import { FavoriteMatchesComponent } from './components/favorite-matches/favorite-matches.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './Components/admin-posts/admin-posts.component';
import { AdminUsersComponent } from './Components/admin-users/admin-users.component';
import { ClubComponent } from './components/club/club.component';
import { NewsViewComponent } from './views/news-view/news-view.component';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
    AuthFormComponent,
    StandingsComponent,
    TopPlayersComponent,
    MatchListComponent,
    LeagueComponent,
    GroupStandingsComponent,
    HomeViewComponent,
    FavouritesViewComponent,
    ErrorComponent,
    AdSpaceComponent,
    StandingsTopWrapperComponent,
    ClubsComponent,
    NewsCardComponent,
    MainNewsComponent,
    FavoriteMatchesComponent,
    AdminDashboardComponent,
    AdminPostsComponent,
    AdminUsersComponent,
    ClubComponent,
    NewsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalendarModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    Ng2SearchPipeModule,
  ],
  providers: [
    DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,

    },
  ],
  bootstrap: [AppComponent]

})
export class AppModule {}
