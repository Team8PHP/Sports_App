import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.css'],
})
export class StandingsComponent implements OnInit {
  constructor(private generalService: GeneralService) {}
  standings: any = [];
  ngOnInit(): void {
    this.getLeagueStandings(1);
  }
  getLeagueStandings(id: number) {
    return this.generalService.getLeagueStandings(id).subscribe((res) => {
      this.standings = res;
      console.log(this.standings);
    });
  }
}
