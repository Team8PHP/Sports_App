import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-group-standings',
  templateUrl: './group-standings.component.html',
  styleUrls: ['./group-standings.component.css'],
})
export class GroupStandingsComponent implements OnInit {
  constructor(private generalService: GeneralService) {}

  standings: any = [];
  ngOnInit(): void {
    this.getGroupStandings(2);
  }
  getGroupStandings(id: number) {
    return this.generalService.getGroupStandings(id).subscribe((res) => {
      this.standings = res;
      console.log(this.standings);
    });
  }
}
