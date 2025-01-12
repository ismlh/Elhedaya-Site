import { TestBed } from '@angular/core/testing';

import { IHadethService } from './ihadeth.service';

describe('IHadethService', () => {
  let service: IHadethService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IHadethService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
