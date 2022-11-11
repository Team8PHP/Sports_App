import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.css'],
})
export class LeagueComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}

  id: any;
  league: any = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getLeague(this.id);
  }

  getLeague(id: number) {
    this.generalService.getLeague(id).subscribe((res) => {
      this.league = res;
    });
  }
}
