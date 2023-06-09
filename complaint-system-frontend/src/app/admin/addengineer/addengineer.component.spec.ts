import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddengineerComponent } from './addengineer.component';

describe('AddengineerComponent', () => {
  let component: AddengineerComponent;
  let fixture: ComponentFixture<AddengineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddengineerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddengineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
