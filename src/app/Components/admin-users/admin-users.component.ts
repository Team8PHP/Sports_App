import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  users:any;
  message:any

  getUsers() {
    return this.admin.getUsers().subscribe((res) => {
      this.users = res;
    });
  }

  makeAdmin(id:number) {
    return this.admin.makeAdmin(id).subscribe((res) => {
      this.message = res;
      this.getUsers();
    });
  }

  deleteUser(id:number) {
    return this.admin.deleteUser(id).subscribe((res) => {
      this.message = res;
      this.getUsers();
    });
  }

}
