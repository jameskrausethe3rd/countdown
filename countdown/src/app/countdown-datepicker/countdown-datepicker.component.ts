import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-countdown-datepicker',
  templateUrl: './countdown-datepicker.component.html',
  styleUrls: ['./countdown-datepicker.component.sass']
})
export class CountdownDatepickerComponent{

  constructor(private dataService: DataService) { }

  format ="MMMM dd, yyyy";
  locale = 'en-US';

  public sendToTimerElement(dateString: string): void {
    this.dataService.setSharedData(dateString);
  }
  changeEvent(e: { value: any; }){
    let dateString = formatDate(e.value, this.format, this.locale);
    this.sendToTimerElement(dateString);
  }
}
