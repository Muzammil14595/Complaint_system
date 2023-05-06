import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerBComponent } from './engineer-b.component';

describe('EngineerBComponent', () => {
  let component: EngineerBComponent;
  let fixture: ComponentFixture<EngineerBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
