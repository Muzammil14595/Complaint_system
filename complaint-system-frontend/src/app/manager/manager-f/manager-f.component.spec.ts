import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerFComponent } from './manager-f.component';

describe('ManagerFComponent', () => {
  let component: ManagerFComponent;
  let fixture: ComponentFixture<ManagerFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagerFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
