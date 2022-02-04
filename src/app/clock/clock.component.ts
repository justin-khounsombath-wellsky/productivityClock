import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  currentTime = "";

  clock() {
    let time = new Date();
    var hour:number | string = time.getHours();
    var minutes:number | string = time.getMinutes();
    var seconds:number | string = time.getSeconds();
    var split = "AM";

    if (hour > 12) {
        hour = 1;
        split = "PM";
    } if (hour < 1){
        hour = 12;
        split = "AM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds <10) ? "0" + seconds : seconds
    this.currentTime = hour + " : " + minutes + " : " + seconds + split;
    
    setTimeout(this.clock, 1000);
  }
}
