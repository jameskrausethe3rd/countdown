import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-timer-element',
  templateUrl: './timer-element.component.html',
  styleUrls: ['./timer-element.component.sass']
})
export class TimerElementComponent implements OnInit {
  public sharedDataDate = "Select a date";
  public subscription!: Subscription;

  title = 'TESTING';
  constructor(private dataService: DataService) { }
  
  public ngOnDestory(): void {
    this.subscription.unsubscribe();
  }

  public ngOnInit() {
    this.subscription = this.dataService.getSharedData().subscribe(data => this.sharedDataDate = data);
  }
}
