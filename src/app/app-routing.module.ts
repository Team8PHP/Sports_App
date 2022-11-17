import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthGuardService } from './auth.guard';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminPostsComponent } from './Components/admin-posts/admin-posts.component';
import { AdminUsersComponent } from './Components/admin-users/admin-users.component';
import { AuthFormComponent } from './Components/auth-form/auth-form.component';
import { ClubComponent } from './components/club/club.component';
import { StandingsTopWrapperComponent } from './Components/standings-top-wrapper/standings-top-wrapper.component';
import { ErrorComponent } from './views/error/error.component';
import { FavouritesViewComponent } from './views/favourites-view/favourites-view.component';
import { HomeViewComponent } from './views/home-view/home-view.component';
import { NewsViewComponent } from './views/news-view/news-view.component';

const routes: Routes = [
  { path: '', component: HomeViewComponent },
  { path: 'auth', component: AuthFormComponent },
  { path: 'league/:id', component: StandingsTopWrapperComponent },
  { path: 'club/:id', component: ClubComponent },
  { path: 'news', component: NewsViewComponent },
  { path: 'favourites', component: FavouritesViewComponent, canActivate: [AuthGuardService] },
  {
    path: 'admin', component: AdminDashboardComponent,
    children: [
      { path: 'posts', component: AdminPostsComponent },
      { path: 'users', component: AdminUsersComponent }
    ],
    canActivate: [AdminGuard]
  },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
