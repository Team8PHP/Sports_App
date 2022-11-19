import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.css'],
})
export class ClubComponent implements OnInit {
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) { }

  id: any;
  club: any = [];

  ngOnInit(): void {
    // retrieve the id from the url
    this.id = this.route.snapshot.paramMap.get('id');
    this.club = this.getClub(this.id);
    this.route.params
      .subscribe(
        (params: any) => {
          this.id = params['id'];
          this.club = this.getClub(this.id);
        }
      );
  }

  getClub(id: number) {
    return this.generalService.getClub(id).subscribe((res) => {
      this.club = res;

      // Sorting the players by position (1:Offence, 2:Midfield, 3:Defence, 4:Goalkeeper)
      this.club.data.players.sort(function (a: any, b: any) {
        if (a.position === 'Midfield') return -1;
        if (b.position === 'Defence') return -1;
        return 0;
      });
      this.club.data.players.sort(function (a: any, b: any) {
        if (a.position === 'Offence') return -1;
        if (b.position === 'Goalkeeper') return -1;
        return 0;
      });
    });
  }
}
