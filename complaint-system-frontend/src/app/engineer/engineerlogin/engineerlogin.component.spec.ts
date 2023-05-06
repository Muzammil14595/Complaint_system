import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineerloginComponent } from './engineerlogin.component';

describe('EngineerloginComponent', () => {
  let component: EngineerloginComponent;
  let fixture: ComponentFixture<EngineerloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngineerloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EngineerloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
