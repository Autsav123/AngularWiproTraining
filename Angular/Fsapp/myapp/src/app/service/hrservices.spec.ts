import { TestBed } from '@angular/core/testing';

import { Hrservices } from './hrservices';

describe('Hrservices', () => {
  let service: Hrservices;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Hrservices);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
