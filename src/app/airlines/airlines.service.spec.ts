import { TestBed, inject } from '@angular/core/testing';

import { AirlinesService } from './airlines.service';

describe('AirlinesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlinesService]
    });
  });

  it('should be created', inject([AirlinesService], (service: AirlinesService) => {
    expect(service).toBeTruthy();
  }));
});
