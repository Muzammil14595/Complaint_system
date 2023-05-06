import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerFComponent } from './engineer-f.component';

describe('EngineerFComponent', () => {
  let component: EngineerFComponent;
  let fixture: ComponentFixture<EngineerFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
