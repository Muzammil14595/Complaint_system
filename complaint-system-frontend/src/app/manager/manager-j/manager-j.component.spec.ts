import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerJComponent } from './manager-j.component';

describe('ManagerJComponent', () => {
  let component: ManagerJComponent;
  let fixture: ComponentFixture<ManagerJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
