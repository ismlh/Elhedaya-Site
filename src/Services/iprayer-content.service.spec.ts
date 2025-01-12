import { TestBed } from '@angular/core/testing';

import { IprayerContentService } from './iprayer-content.service';

describe('IprayerContentService', () => {
  let service: IprayerContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IprayerContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
