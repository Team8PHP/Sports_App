import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { LeaguesTableComponent } from './Components/leagues-table/leagues-table.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    CalenderComponent,
    LeaguesTableComponent
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
