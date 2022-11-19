import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']

})
export class NavbarComponent implements OnInit {
  title = 'angular-text-search-highlight';

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
    console.log(search);
  }

clubPage(){
  window.location.reload()
}
}
