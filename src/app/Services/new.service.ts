import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient) { }

  GetLatestNews() {
    return this.http.get(baseUrl+"news/latest")
  }

  GetOtherNews() {
    return this.http.get(baseUrl+"news/other")
  }
}
