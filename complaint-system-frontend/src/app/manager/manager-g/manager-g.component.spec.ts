import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGComponent } from './manager-g.component';

describe('ManagerGComponent', () => {
  let component: ManagerGComponent;
  let fixture: ComponentFixture<ManagerGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
