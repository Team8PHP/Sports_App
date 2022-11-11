import { Component, OnInit } from '@angular/core';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  constructor(private generalService: GeneralService) {}
  favourites: any = [];
  ngOnInit(): void {
    this.getFavourites(1);
  }
  getFavourites(id: number) {
    return this.generalService.getFavourites(id).subscribe((res) => {
      this.favourites = res;
    });
  }
  addfavourites(){
    // return this.generalService.addtoFavourites()
  }
  deletefavourites(){
    // return this.generalService.deletefromFavourites()
  }
}
