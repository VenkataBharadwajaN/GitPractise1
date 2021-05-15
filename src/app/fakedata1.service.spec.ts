import { TestBed } from '@angular/core/testing';

import { Fakedata1Service } from './fakedata1.service';

describe('Fakedata1Service', () => {
  let service: Fakedata1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Fakedata1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
