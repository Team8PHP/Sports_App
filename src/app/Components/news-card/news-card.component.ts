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
  returnCount:any;
  page:number=1
  numOfPage:any=1;
  constructor(private news:NewService) { }

  ngOnInit(): void {
    this.getOtherNews();
    this.getNewsCount();
  }

  getOtherNews(){
    return this.news.GetOtherNews(this.page).subscribe(res =>{
        this.returnNews= res
        this.otherNews = this.returnNews.data
     })
   }
   getNewsCount(){
    return this.news.GetNewsCount().subscribe(res =>{
        this.returnCount=res;
        this.numOfPage = Math.ceil((this.returnCount-1)/18 ) 
        console.log(this.numOfPage);
     })
   }

   nextPage(){
    this.page++;
    this.getOtherNews();
   }

   prevPage(){
    this.page--;
    this.getOtherNews();
   }
}
