import { TestBed } from '@angular/core/testing';

import { MusicanService } from './musican.service';

describe('MusicanService', () => {
  let service: MusicanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
