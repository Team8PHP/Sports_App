import {  EventEmitter, Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  constructor(private datePipe: DatePipe) { }

  date: any = new Date();
  dateUpdated = new EventEmitter();

  set CalenderDate(date: any) {
    this.date = date;
    this.dateUpdated.emit(this.date)
  }

  get CalenderDate() {
    let calender = this.datePipe.transform(this.date, 'yyyy-MM-dd')
    return calender
  }


}
