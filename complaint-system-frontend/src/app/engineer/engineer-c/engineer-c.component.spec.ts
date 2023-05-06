import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerCComponent } from './engineer-c.component';

describe('EngineerCComponent', () => {
  let component: EngineerCComponent;
  let fixture: ComponentFixture<EngineerCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
