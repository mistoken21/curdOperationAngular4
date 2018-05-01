import { TestBed, inject } from '@angular/core/testing';

import { FetchjsonService } from './fetchjson.service';

describe('FetchjsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchjsonService]
    });
  });

  it('should be created', inject([FetchjsonService], (service: FetchjsonService) => {
    expect(service).toBeTruthy();
  }));
});
