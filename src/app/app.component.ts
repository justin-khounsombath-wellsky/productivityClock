import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'productivity-clock';

  ngOnInit() {
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
