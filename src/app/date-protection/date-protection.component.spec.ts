import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateProtectionComponent } from './date-protection.component';

describe('DateProtectionComponent', () => {
  let component: DateProtectionComponent;
  let fixture: ComponentFixture<DateProtectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateProtectionComponent]
    });
    fixture = TestBed.createComponent(DateProtectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
