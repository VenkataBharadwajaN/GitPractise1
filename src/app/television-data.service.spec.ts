import { TestBed } from '@angular/core/testing';

import { TelevisionDataService } from './television-data.service';

describe('TelevisionDataService', () => {
  let service: TelevisionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelevisionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
