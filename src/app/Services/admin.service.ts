import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  //get users
  getUsers() {
    return this.http.get(baseUrl + 'admin/users');
  }

  //get users
  makeAdmin(id:number) {
    return this.http.put(baseUrl + 'admin/users/' + id,'');
  }

  //get users
  deleteUser(id:number) {
    return this.http.delete(baseUrl + 'admin/users/' + id);
  }


  //get news
  getNews() {
    return this.http.get(baseUrl + 'admin/news');
  }

  //get news
  deleteNews(id:number) {
    return this.http.delete(baseUrl + 'admin/news/' + id);
  }
}
