import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownToolbarComponent } from './countdown-toolbar.component';

describe('CountdownToolbarComponent', () => {
  let component: CountdownToolbarComponent;
  let fixture: ComponentFixture<CountdownToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountdownToolbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountdownToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
