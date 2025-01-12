import { TestBed } from '@angular/core/testing';

import { IsuarhService } from './isuarh.service';

describe('IsuarhService', () => {
  let service: IsuarhService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuarhService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
