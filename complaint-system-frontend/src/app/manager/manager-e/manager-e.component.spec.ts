import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEComponent } from './manager-e.component';

describe('ManagerEComponent', () => {
  let component: ManagerEComponent;
  let fixture: ComponentFixture<ManagerEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
