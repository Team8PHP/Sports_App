import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-admin-posts',
  templateUrl: './admin-posts.component.html',
  styleUrls: ['./admin-posts.component.css']
})
export class AdminPostsComponent implements OnInit {

  constructor(private admin: AdminService) { }

  ngOnInit(): void {
    this.getNews();
  }

  news: any;
  message: any;

  getNews() {
    return this.admin.getNews().subscribe((res) => {
      this.news = res;    
    });
  }

  deleteNews(id: number) {
    if (confirm("Are you sure to delete this?")) {
      return this.admin.deleteNews(id).subscribe((res) => {
        this.message = res;
        this.getNews();
      });
    }
    return false
  }

}
