import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllengineersComponent } from './allengineers.component';

describe('AllengineersComponent', () => {
  let component: AllengineersComponent;
  let fixture: ComponentFixture<AllengineersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllengineersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllengineersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
