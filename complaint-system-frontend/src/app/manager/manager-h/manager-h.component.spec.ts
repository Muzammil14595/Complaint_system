import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerHComponent } from './manager-h.component';

describe('ManagerHComponent', () => {
  let component: ManagerHComponent;
  let fixture: ComponentFixture<ManagerHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
