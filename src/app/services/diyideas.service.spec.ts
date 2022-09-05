import { TestBed } from '@angular/core/testing';

import { DiyideasService } from './diyideas.service';

describe('DiyideasService', () => {
  let service: DiyideasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiyideasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
