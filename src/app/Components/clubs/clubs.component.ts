import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  constructor(private generalService: GeneralService) { }


  ngOnInit(): void {
    this.getClubs()
  }

  clubs: any = [];

  formData = new FormGroup({
    user_id: new FormControl('', Validators.required),
    club_id: new FormControl('', Validators.required)
  })


  getClubs() {
    return this.generalService.getClubs().subscribe((res) => {
      this.clubs = res;
    });
  }
  addfavourites(id: any) {
    this.formData.patchValue({
      user_id: '1',
      club_id: id
    });

    // var element = document.getElementById("addFavBtn");
    // element?.classList.toggle("d-none");

    return this.generalService.addtoFavourites(this.formData.value).subscribe((res) => {
      console.log(res);
    });
  }
  // deletefavourites(id: any) {
  //   return this.generalService.deletefromFavourites()
  // }

}
