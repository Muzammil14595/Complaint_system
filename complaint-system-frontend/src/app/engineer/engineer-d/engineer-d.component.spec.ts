import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerDComponent } from './engineer-d.component';

describe('EngineerDComponent', () => {
  let component: EngineerDComponent;
  let fixture: ComponentFixture<EngineerDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
