import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerIComponent } from './engineer-i.component';

describe('EngineerIComponent', () => {
  let component: EngineerIComponent;
  let fixture: ComponentFixture<EngineerIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
