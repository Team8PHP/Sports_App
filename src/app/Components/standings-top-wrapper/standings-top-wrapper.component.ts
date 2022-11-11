import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-standings-top-wrapper',
  templateUrl: './standings-top-wrapper.component.html',
  styleUrls: ['./standings-top-wrapper.component.css'],
})
export class StandingsTopWrapperComponent implements OnInit {
  id: any;
  constructor(
    private generalService: GeneralService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
  }


}
