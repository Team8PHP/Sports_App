import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient) {}
  // Favourites
  getFavourites(id: number) {
    return this.http.get(baseUrl + 'favourites/' + id);
  }
  // League Standings
  getLeagueStandings(id: number) {
    return this.http.get(baseUrl + 'league/' + id);
  }
  // Group Standings
  getGroupStandings(id: number) {
    return this.http.get(baseUrl + 'group/' + id);
  }
  // League
  getLeague(id: number) {
    return this.http.get(baseUrl + 'competition/' + id);
  }
  // All Leagues
  getAllLeagues() {
    return this.http.get(baseUrl + 'leagues');
  }
  
}
