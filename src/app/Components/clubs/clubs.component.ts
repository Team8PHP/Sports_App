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
    this.checkfavourites(this.user)
  }

  clubs: any = [];

  user:any 
  existfav:any = []
  allfavs:any

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
    userid=this.auth.getUserId().id
      return this.generalService.deletefromClubs(userid,clubid).subscribe(res => {
        console.log('inside deetle')
        this.displayadd(clubid)
      })
    }
  

    displayDelete(id:any = null){
      // console.log(this.formData.value.club_id)
     document.getElementById('add-'+this.formData.value.club_id)?.classList.add('hidden')
     document.getElementById('del-'+this.formData.value.club_id)?.classList.remove('hidden')

      if(id != null){
        console.log('inside if delete display');
        
        document.getElementById('add-'+id)?.classList.add('hidden')
      document.getElementById('del-'+id)?.classList.remove('hidden')
      
      }
    }


    displayadd(id:any = null){
      document.getElementById('add-'+this.formData.value.club_id)?.classList.remove('hidden')
      document.getElementById('del-'+this.formData.value.club_id)?.classList.add('hidden')

      if(id != null){
        console.log('inside if adddsiplay');
        
        document.getElementById('add-'+id)?.classList.remove('hidden')
        document.getElementById('del-'+id)?.classList.add('hidden')
      
      }
    }
    
    checkfavourites(id:any){
      return this.generalService.getFavourites(id).subscribe((res) => {
        this.allfavs=res
        var that = this
        // this.existfav=this.allfavs.data
        this.allfavs.data.forEach(function  (team:any)  {
          that.existfav.push(team.club_id)
        });
        console.log(this.existfav)
        this.existfav.forEach(function  (id:any)  {
          that.displayDelete(id)
        });
        this.existfav = []
      });
    }
    
}
