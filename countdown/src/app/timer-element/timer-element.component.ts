import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DataService } from '../data.service';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-timer-element',
  templateUrl: './timer-element.component.html',
  styleUrls: ['./timer-element.component.sass']
})
export class TimerElementComponent implements OnInit, OnDestroy {
  public subscription!: Subscription;
  public timeDifference: any;
  public secondsToDday: any;
  public minutesToDday: any;
  public hoursToDday: any;
  public daysToDday: any;
  public datePickerDate: any;
  public currentTime!: Date;
  public currentTimeMidnight!: Date;
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute  = 60;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router) 
    { 
      this.route.queryParams.subscribe(params => {
        this.datePickerDate = params['date'];
      });
    }
  
  private getTimeDifference () {
    this.currentTime = new Date();
    this.currentTimeMidnight = new Date(this.currentTime.getTime());
    this.currentTimeMidnight.setHours(0, 0, 0, 0);
    this.timeDifference = new Date(this.datePickerDate).getTime() - this.currentTime.getTime();
    this.allocateTimeUnits(this.timeDifference);
  }

  private allocateTimeUnits (timeDifference: any) {
    this.secondsToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond) % this.SecondsInAMinute);
    this.minutesToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour) % this.SecondsInAMinute);
    this.hoursToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute) % this.hoursInADay);
    this.daysToDday = Math.floor((timeDifference) / (this.milliSecondsInASecond * this.minutesInAnHour * this.SecondsInAMinute * this.hoursInADay));
}
  
  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit(): void {
    this.getTimeDifference();
    this.subscription = interval(1000)
           .subscribe(x => { this.getTimeDifference(); });
  }
}
