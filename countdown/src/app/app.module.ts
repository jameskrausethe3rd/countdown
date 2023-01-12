import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TimerElementComponent } from './timer-element/timer-element.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { CountdownDatepickerComponent } from './countdown-datepicker/countdown-datepicker.component';
import { CountdownToolbarComponent } from './countdown-toolbar/countdown-toolbar.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { NameChangeDialogComponent } from './name-change-dialog/name-change-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerElementComponent,
    CountdownDatepickerComponent,
    CountdownToolbarComponent,
    NameChangeDialogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'dateRange', component: TimerElementComponent}
    ]),
    AppRoutingModule,
    BrowserAnimationsModule,

    MatNativeDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
