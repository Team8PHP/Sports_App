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
  ) {}

  id: any;
  club: any = [];

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.club = this.getClub(this.id);
  }

  getClub(id: number) {
    return this.generalService.getClub(id).subscribe((res) => {
      this.club = res;
      // this.club.data.players.sort(function (a:any, b:any) {
      //   if (a.position > b.position) return 1;
      //   if (a.position < b.position) return -1;
      //   return 0;
      // });
      this.club.data.players.sort(function (a: any , b:any) {
        if (a.position === 'Defence') return -1;
        if (b.position === 'Midfield') return -1;
        return 0;
      });
      this.club.data.players.sort(function (a: any , b:any) {
        if (a.position === 'Goalkeeper') return -1;
        if (b.position === 'Offence') return -1;
        return 0;
      });
      console.log(this.club);
    });
  }
}