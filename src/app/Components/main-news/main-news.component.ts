import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/Services/new.service';

@Component({
  selector: 'app-main-news',
  templateUrl: './main-news.component.html',
  styleUrls: ['./main-news.component.css']
})
export class MainNewsComponent implements OnInit {
  latestNews:any;
  returnNews:any;
  constructor(private news:NewService) { }

  ngOnInit(): void {
    this.getLatestNews();
  }
  
  getLatestNews(){
   return this.news.GetLatestNews().subscribe(res =>{
       this.returnNews= res
       this.latestNews = this.returnNews.data[0];
    })
  }

}
