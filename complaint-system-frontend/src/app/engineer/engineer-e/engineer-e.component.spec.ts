import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerEComponent } from './engineer-e.component';

describe('EngineerEComponent', () => {
  let component: EngineerEComponent;
  let fixture: ComponentFixture<EngineerEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
