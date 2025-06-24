import { TestBed } from '@angular/core/testing';

import { ChartRefreshService } from './chart-refresh.service';

describe('ChartRefreshService', () => {
  let service: ChartRefreshService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartRefreshService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
