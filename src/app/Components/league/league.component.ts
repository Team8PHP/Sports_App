import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
})
export class LeagueComponent implements OnInit {
  constructor(private generalService: GeneralService) {}
  league: any = [];
  ngOnInit(): void {
    this.getLeague(1);
  }

  getLeague(id: number) {
    this.generalService.getLeague(id).subscribe((res) => {
      this.league = res;
    });
  }
}
