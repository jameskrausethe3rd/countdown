import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatDialog } from '@angular/material/dialog';
import { NameChangeDialogComponent } from '../name-change-dialog/name-change-dialog.component';

@Component({
  selector: 'app-countdown-datepicker',
  templateUrl: './countdown-datepicker.component.html',
  styleUrls: ['./countdown-datepicker.component.sass']
})
export class CountdownDatepickerComponent implements OnInit{

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog) { }

  datePickerDate = '';
  title = '';

  selectedDate = new FormGroup({
    date: new FormControl()
  });

  public sendToTimerElement(dateString: string): void {
    this.dataService.setSharedData(dateString);
  }

  openNameChangeDialog() {
    let dialogRef = this.dialog.open(NameChangeDialogComponent, {
      data: {title: this.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.title = result
      this.router.navigate(['/dateRange'], { queryParams: { date: this.datePickerDate, title: this.title} });
    });
  }

  resetDatepicker() {
    this.router.navigate(['/']);
    this.datePickerDate = '';
  }

  dateChangedEvent(e: { value: Date; }){
    if(e.value){
      this.datePickerDate = e.value.toISOString()
      this.router.navigate(['/dateRange'], { queryParams: { date: this.datePickerDate } });
    }
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.selectedDate.patchValue({
          date: params['date']
        });
      this.sendToTimerElement(params['date']);
      if(params['date']){
        this.datePickerDate = new Date(params['date']).toISOString();
      }
      }
    );
  }
}
