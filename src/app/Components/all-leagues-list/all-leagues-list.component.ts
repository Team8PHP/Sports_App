import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-all-leagues-list',
  templateUrl: './all-leagues-list.component.html',
  styleUrls: ['./all-leagues-list.component.css'],
})
export class AllLeaguesListComponent implements OnInit {
  constructor(private generalService: GeneralService) {}

  leagues: any = [];

  ngOnInit(): void {
    this.getLeagues();
  }

  getLeagues() {
    return this.generalService.getAllLeagues().subscribe((res) => {
      // console.log(res)
      this.leagues = res;
      console.log(this.leagues);
    });
  }
}
