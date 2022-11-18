import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeneralService {
  constructor(private http: HttpClient) { }
  // Favourites
  getFavourites(id: number) {
    return this.http.get(baseUrl + 'favourites/' + id);
  }
  // add to favourites
  addtoFavourites(data: any) {
    return this.http.post(baseUrl + 'favourites', data);
  }
  // delete from favourites
  deletefromFavourites(id: number) {
    return this.http.delete(baseUrl + 'favourites/' + id);
  }
  // delete from favourites
  deletefromClubs(userid:number ,clubid: number) {
    return this.http.delete(baseUrl + 'delete/' + userid+'/'+clubid);
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

  // clubs
  getClubs() {
    return this.http.get(baseUrl + 'clubs');
  }

  // Club
  getClub(id:number) {
    return this.http.get(baseUrl + 'club/'+id);
  }

  

  // top scorers
  getTopScorers(id: number) {
    return this.http.get(baseUrl + 'scorers/' + id);
  }

  // All Leagues
  getAllLeagues() {
    return this.http.get(baseUrl + 'leagues');
  }

  // matches
  getMatches(date: string) {
    return this.http.get(baseUrl + 'matches/' + date);
  }

  // live matches
  getLiveMatches(date: string) {
    return this.http.get(baseUrl + 'matches/live/' + date );
  }

  // favorite teams matches
  getFavMatches(user:any, date: string) {
    return this.http.get(baseUrl + 'matches/favourites/'+user +"/"+ date);
  }

  // favorite teams live matches
  getLiveFavMatches(user:any,date: string) {
    return this.http.get(baseUrl + 'matches/favourites/live/'+user+'/'+date);
  }


}
