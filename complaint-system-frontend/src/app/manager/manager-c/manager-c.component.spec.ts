import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCComponent } from './manager-c.component';

describe('ManagerCComponent', () => {
  let component: ManagerCComponent;
  let fixture: ComponentFixture<ManagerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
