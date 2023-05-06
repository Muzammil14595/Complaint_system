import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAComponent } from './manager-a.component';

describe('ManagerAComponent', () => {
  let component: ManagerAComponent;
  let fixture: ComponentFixture<ManagerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
