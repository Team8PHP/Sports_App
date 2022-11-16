import { Component, OnInit } from '@angular/core';
import { NewService } from 'src/app/Services/new.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {
  otherNews:any;
  returnNews:any;
  constructor(private news:NewService) { }

  ngOnInit(): void {
  }

  getOther(){
    return this.news.GetOtherNews().subscribe(res =>{
        this.returnNews= res
        this.otherNews = this.returnNews.data
        console.log(this.returnNews);
     })
   }
}
