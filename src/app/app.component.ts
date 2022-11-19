import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './Services/auth.service';
import { TokenService } from './Services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports_app';

  constructor(private auth: AuthService , private router:Router) { }

  user: any;


  ngOnInit(): void {
    if(this.auth.isLoggedin()){
      this.auth.autoLogin().subscribe((res)=>{
        this.auth.setUser(res);
        console.log("Here");
        this.router.navigate(['/']);
    })
    
    }

  }

}
