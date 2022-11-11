import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth.guard';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { ErrorComponent } from './views/error/error.component';
import { FavouritesViewComponent } from './views/favourites-view/favourites-view.component';
// import { MatchListComponent } from './components/match-list/match-list.component';
import { HomeViewComponent } from './views/home-view/home-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'auth', component: AuthFormComponent },
  { path: 'favourites', component: FavouritesViewComponent , canActivate: [AuthGuardService]}, 
  { path: '**', component: ErrorComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
