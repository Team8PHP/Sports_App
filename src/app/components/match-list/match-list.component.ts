import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {

  constructor(private generalService: GeneralService) { }

  ngOnInit(): void {
    this.getByDate(this.date);
  }



  ngAfterViewInit() {
  }

  matches: any;
  liveChecked: boolean = false;
  date: string = '2022-11-12'

  getByDate(date: string) {
    return this.generalService.getMatches(date).subscribe((res) => {
      this.matches = res;
      this.matches.matches.sort(function (a:any, b:any) {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });
      console.log(this.matches);
    });
  }

  getLive(date: string) {
    return this.generalService.getLiveMatches(date).subscribe((res) => {
      this.matches = res;
      this.matches.matches.sort(function (a:any, b:any) {
        if (a.time > b.time) return 1;
        if (a.time < b.time) return -1;
        return 0;
      });
      console.log(this.matches);
    });
  }

  // toggleLive(){
  //   getLive
  // }

  checkValue(event: any) {
    if (event) {
      this.getLive(this.date);
    } else {
      this.getByDate(this.date);
    }
  }

}
