import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerHComponent } from './engineer-h.component';

describe('EngineerHComponent', () => {
  let component: EngineerHComponent;
  let fixture: ComponentFixture<EngineerHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
