import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FavouritesComponent } from './Components/favourites/favourites.component';
import { CalenderComponent } from './Components/calender/calender.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { AllLeaguesListComponent } from './Components/all-leagues-list/all-leagues-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouritesComponent,
    CalenderComponent,
 
    AllLeaguesListComponent
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
