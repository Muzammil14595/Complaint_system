import { TestBed } from '@angular/core/testing';

import { AssignedComplaintService } from './assigned-complaint.service';

describe('AssignedComplaintService', () => {
  let service: AssignedComplaintService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignedComplaintService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
