import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) { }
  id: any;
  standings: any = [];
  finalStanding: any = [];
  test:any=[];
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeagueStandings(this.id);
  }

  getLeagueStandings(id: number) {
    return this.generalService.getLeagueStandings(id).subscribe((res) => {
      this.standings = res;
      this.standings.data.sort(function (a:any, b:any) {
        if (a.position > b.position) return 1;
        if (a.position < b.position) return -1;
        return 0;
      });
    });
  }
}
