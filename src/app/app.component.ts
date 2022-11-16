import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sports_app';

  constructor(private auth: AuthService) { }

  user: any;

  ngOnInit(): void {
    this.auth.getUser()
  }
  // isFirstClick = true;
  // first() {
  //   this.isFirstClick = !this.isFirstClick;
  //   console.log('first');
  //   document.getElementById("1")?.classList.add('bg-danger')
  // }

  // second() {
  //   this.isFirstClick = !this.isFirstClick;
  //   document.getElementById("1")?.classList.remove('bg-danger')
  //   console.log('second');
  // }
}
