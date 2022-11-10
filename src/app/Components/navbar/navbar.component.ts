import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent implements OnInit {
  title = 'angular-text-search-highlight';
  searchText = '';
  characters = [
    // 'Ant-Man',
    // 'Aquaman',
    // 'Asterix',
    // 'The Atom',
    // 'The Avengers',
    // 'Batgirl',
    // 'Batman',
    // 'Batwoman',
  ]
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  signOut() {
    this.auth.LogOut()
  }



}
