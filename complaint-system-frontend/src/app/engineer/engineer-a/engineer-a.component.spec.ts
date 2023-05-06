import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerAComponent } from './engineer-a.component';

describe('EngineerAComponent', () => {
  let component: EngineerAComponent;
  let fixture: ComponentFixture<EngineerAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
