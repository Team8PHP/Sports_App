import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { CalenderService } from 'src/app/Services/calender.service';
import { GeneralService } from 'src/app/Services/general.service';


@Component({
  selector: 'app-favorite-matches',
  templateUrl: './favorite-matches.component.html',
  styleUrls: ['./favorite-matches.component.css']
})
export class FavoriteMatchesComponent implements OnInit {

  constructor(private generalService: GeneralService,  public calenderService : CalenderService ,private auth:AuthService) { }

  ngOnInit(): void {
    this.getByDate(this.user,this.date);
    this.calenderService.dateUpdated.subscribe(
      (res) => {
        this.date = this.calenderService.CalenderDate;
        this.getByDate(this.user,this.date);
      }
    );
  }

  matches: any;
  liveChecked: boolean = false;
  date:any = this.calenderService.CalenderDate
  user:any

  getByDate(user:any,date: any) {
    return this.generalService.getFavMatches(user,date).subscribe((res) => {
      // console.log("response")
      this.matches = res;
      // console.log(this.matches);
      // this.matches.matches.sort(function (a:any, b:any) {
      //   if (a.time > b.time) return 1;
      //   if (a.time < b.time) return -1;
      //   return 0;
      // });
    },(err)=>{console.log(err)});
  }

  getLive(user:any,date: any) {
    return this.generalService.getLiveFavMatches(user,date).subscribe((res) => {
      this.matches = res;
      // this.matches.matches.sort(function (a:any, b:any) {
      //   if (a.time > b.time) return 1;
      //   if (a.time < b.time) return -1;
      //   return 0;
      // });
    });
  }

  checkValue(event: any) {
    if (event) {
      this.getLive(this.user,this.date);
    } else {
      this.getByDate(this.user,this.date);
    }
  }


}
