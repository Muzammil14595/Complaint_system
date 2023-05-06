import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerBComponent } from './manager-b.component';

describe('ManagerBComponent', () => {
  let component: ManagerBComponent;
  let fixture: ComponentFixture<ManagerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
