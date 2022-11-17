import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css'],
})
export class FavouritesComponent implements OnInit {
  constructor(private generalService: GeneralService, private auth: AuthService) { }
  favourites: any = [];
  user: any;
  ngOnInit(): void {
    this.auth.getUser()
    this.user = this.auth.getUserId()
    this.getFavourites(this.user.id);
    console.log(this.user);
  }

  formData = new FormGroup({
    user: new FormControl('', Validators.required),
    club: new FormControl('', Validators.required)
  })

  getFavourites(id: number) {
    return this.generalService.getFavourites(id).subscribe((res) => {
      this.favourites = res;
    });
  }
  addfavourites(event: any) {
    // this.formData.patchValue({
    //   club: event.target
    // });
    console.log(event.target)
    // return this.generalService.addtoFavourites()
  }
  deletefavourites(id: number) {
    return this.generalService.deletefromFavourites(id).subscribe(res => {
      this.getFavourites(this.user.id);
    })
  }
}
