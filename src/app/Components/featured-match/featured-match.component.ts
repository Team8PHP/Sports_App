import { Component, OnInit } from '@angular/core';
import { CalenderService } from 'src/app/Services/calender.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-featured-match',
  templateUrl: './featured-match.component.html',
  styleUrls: ['./featured-match.component.css']
})
export class FeaturedMatchComponent implements OnInit {

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
  featured: any;
  date:any = this.calenderService.CalenderDate

  getByDate(date: any) {
    return this.generalService.getMatches(date).subscribe((res) => {
      this.matches = res;
      this.featured = this.matches.match[0]
      console.log(this.matches.match[0]);
    });
  }
}
