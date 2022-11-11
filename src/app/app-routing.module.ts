import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth.guard';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { StandingsTopWrapperComponent } from './Components/standings-top-wrapper/standings-top-wrapper.component';
import { ErrorComponent } from './views/error/error.component';
import { FavouritesViewComponent } from './views/favourites-view/favourites-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'auth', component: AuthFormComponent },
  { path: 'league/{id}', component: StandingsTopWrapperComponent },
  { path: 'favourites', component: FavouritesViewComponent , canActivate: [AuthGuardService]},
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
