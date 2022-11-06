import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  public minDate: Date = new Date ("01/01/2015");
  public maxDate: Date = new Date ("08/27/2030");
  public value: Date = new Date("05/07/2017");
 
  constructor() { }

  ngOnInit(): void {
  }
  click(){
    console.log(this.value);
  }
  onChange(args:any) {
    console.log(Date.parse(args.value))
    console.log(args.value)
    this.value= args.value;
}
}
