import { TestBed } from '@angular/core/testing';

import { FileOps } from './file-ops';

describe('FileOps', () => {
  let service: FileOps;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileOps);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
