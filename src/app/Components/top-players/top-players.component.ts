import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css'],
})
export class TopPlayersComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}
  id: any;
  scorers: any = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.scorers = this.getTopScorers(this.id);
  }

  getTopScorers(id: number) {
    return this.generalService.getTopScorers(id).subscribe((res) => {
      this.scorers = res;
      console.log(this.scorers);
    });
  }
}
