import { TestBed } from '@angular/core/testing';

import { IsuarhContentService } from './isuarh-content.service';

describe('IsuarhContentService', () => {
  let service: IsuarhContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IsuarhContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
