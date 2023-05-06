import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerJComponent } from './engineer-j.component';

describe('EngineerJComponent', () => {
  let component: EngineerJComponent;
  let fixture: ComponentFixture<EngineerJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerJComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
