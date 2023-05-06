import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerIComponent } from './manager-i.component';

describe('ManagerIComponent', () => {
  let component: ManagerIComponent;
  let fixture: ComponentFixture<ManagerIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
