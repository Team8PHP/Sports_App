import { Component, ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/Services/auth.service';
import { GeneralService } from 'src/app/Services/general.service';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.css']
})
export class ClubsComponent implements OnInit {

  constructor(private generalService: GeneralService ,private auth: AuthService ) { }


  ngOnInit(): void {
    this.getClubs()
     this.user=this.auth.getUserId().id
     console.log(this.user)
  }

  clubs: any = [];

  user:any = this.auth.getUserId().id

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
      user_id:  this.auth.getUserId().id,
      club_id: id
    });
  console.log(this.formData.value);
  
    return this.generalService.addtoFavourites(this.formData.value).subscribe((res) => {
      console.log(res);
    });
  }
  // deletefavourites(id: any) {
    //   return this.generalService.deletefromFavourites(id)
    // }
 
   

  deletefavourites(userid:any,clubid: any) {
    console.log('second')
    userid=this.auth.getUserId().id
      return this.generalService.deletefromClubs(userid,clubid).subscribe(res => {
        console.log('inside deetle')
      })
    }
  

    displayDelete(){
      // console.log(this.formData.value.club_id)
     document.getElementById('add-'+this.formData.value.club_id)?.classList.add('hidden')
     document.getElementById('del-'+this.formData.value.club_id)?.classList.remove('hidden')
   
    }


    displayadd(){
      document.getElementById('add-'+this.formData.value.club_id)?.classList.remove('hidden')
      document.getElementById('del-'+this.formData.value.club_id)?.classList.add('hidden')

    }
}
