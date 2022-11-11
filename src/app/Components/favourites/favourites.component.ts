import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventManager } from '@angular/platform-browser';
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

  formData = new FormGroup({
    user: new FormControl('',Validators.required),
    club: new FormControl('',Validators.required)
  })

  getFavourites(id: number) {
    return this.generalService.getFavourites(id).subscribe((res) => {
      this.favourites = res;
    });
  }
  addfavourites(event:any){
    // this.formData.patchValue({
    //   club: event.target
    // });
    console.log(event.target)
    // return this.generalService.addtoFavourites()
  }
  deletefavourites(){
    // return this.generalService.deletefromFavourites()
  }
}
