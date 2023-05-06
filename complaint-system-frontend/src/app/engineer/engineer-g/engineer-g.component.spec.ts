import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerGComponent } from './engineer-g.component';

describe('EngineerGComponent', () => {
  let component: EngineerGComponent;
  let fixture: ComponentFixture<EngineerGComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerGComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
