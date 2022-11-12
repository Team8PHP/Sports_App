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
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeagueStandings(this.id);
  }

  getLeagueStandings(id: number) {
    return this.generalService.getLeagueStandings(id).subscribe((res) => {
      this.standings = res;
      this.sortedStandings();
      console.log(this.finalStanding);
    });
  }

  sortedStandings() {
    // this.standings.forEach(team:any => {
    //   let index = team.data.position
    // });

    for (let team of this.standings.data) {
      let index = parseInt(team.position, 10) - 1;
      // let ind: number =+index  - 1;
      this.finalStanding.splice(index, 0, team);
      console.log('index: ' + index)
      console.log('teams: ' + team)

    }
  }
}
