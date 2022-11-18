import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

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
  constructor(public auth:AuthService, private router:  Router,  private generalservice: GeneralService ) { }
   data:any;
  ngOnInit(): void {
  }

  signOut() {
    this.auth.LogOut()
    this.router.navigate(['/auth']);
  }
  searchClub(name:any){
    const keyword = name.target.value;
    const search = this.generalservice.getSearchClub(keyword).then(response =>{
      this.data= response;

    });
  }

  clubPage(result:any){
    this.router.navigate(['club/:id'])
  }



}
