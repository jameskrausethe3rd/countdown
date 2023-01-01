import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-countdown-datepicker',
  templateUrl: './countdown-datepicker.component.html',
  styleUrls: ['./countdown-datepicker.component.sass']
})
export class CountdownDatepickerComponent{

  constructor(private dataService: DataService) { }

  public sendToTimerElement(dateString: string): void {
    this.dataService.setSharedData(dateString);
  }
  changeEvent(e: { value: any; }){
    let dateString = e.value.toString();
    this.sendToTimerElement(dateString);
  }
}
