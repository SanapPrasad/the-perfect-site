import { TestBed } from '@angular/core/testing';

import { EducationservicesService } from './educationservices.service';

describe('EducationservicesService', () => {
  let service: EducationservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EducationservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
