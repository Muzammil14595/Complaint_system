import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmanagersComponent } from './allmanagers.component';

describe('AllmanagersComponent', () => {
  let component: AllmanagersComponent;
  let fixture: ComponentFixture<AllmanagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmanagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllmanagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
