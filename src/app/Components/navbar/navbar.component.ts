import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

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
  constructor(public auth:AuthService, private router:  Router) { }

  ngOnInit(): void {
  }

  signOut() {
    this.auth.LogOut()
    this.router.navigate(['/auth']);
  }



}
