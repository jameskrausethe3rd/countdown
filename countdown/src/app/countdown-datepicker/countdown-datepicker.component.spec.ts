import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDatepickerComponent } from './countdown-datepicker.component';

describe('CountdownDatepickerComponent', () => {
  let component: CountdownDatepickerComponent;
  let fixture: ComponentFixture<CountdownDatepickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownDatepickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
