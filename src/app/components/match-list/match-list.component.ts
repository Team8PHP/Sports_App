import { Component, ElementRef, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { CalenderService } from 'src/app/Services/calender.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  constructor(private generalService: GeneralService,  public calenderService : CalenderService) { }

  ngOnInit(): void {
    this.getByDate(this.date);
    this.calenderService.dateUpdated.subscribe(
      (res) => {
        this.date = this.calenderService.CalenderDate;
        this.getByDate(this.date);
      }
    );
  }

  matches: any;
  liveChecked: boolean = false;
  date:any = this.calenderService.CalenderDate

  getByDate(date: any) {
    return this.generalService.getMatches(date).subscribe((res) => {
      this.matches = res;
      // console.log(this.matches);
      // this.matches.matches.sort(function (a:any, b:any) {
      //   if (a.time > b.time) return 1;
      //   if (a.time < b.time) return -1;
      //   return 0;
      // });
    });
  }

  getLive(date: any) {
    return this.generalService.getLiveMatches(date).subscribe((res) => {
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
      this.getLive(this.date);
    } else {
      this.getByDate(this.date);
    }
  }

}
