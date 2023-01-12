import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-name-change-dialog',
  templateUrl: './name-change-dialog.component.html',
  styleUrls: ['./name-change-dialog.component.sass']
})
export class NameChangeDialogComponent implements OnInit{

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
      
  }
}
