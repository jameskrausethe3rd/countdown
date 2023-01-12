import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countdown-toolbar',
  templateUrl: './countdown-toolbar.component.html',
  styleUrls: ['./countdown-toolbar.component.sass']
})
export class CountdownToolbarComponent implements OnInit{

  constructor(
    private route: ActivatedRoute
    ) { }

  title!: string;

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if(params['title']){
        this.title = params['title'];
      }
      else {
        this.title = "Day Countdown";
      }
    });
  }
}
