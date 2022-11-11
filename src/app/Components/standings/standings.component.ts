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
  ) {}
  id: any;
  standings: any = [];
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeagueStandings(this.id);
  }
  getLeagueStandings(id: number) {
    return this.generalService.getLeagueStandings(id).subscribe((res) => {
      this.standings = res;
      console.log(this.standings);
    });
  }
}
