import { TestBed, inject } from '@angular/core/testing';

import { BuscaService } from './busca.service';

describe('BuscaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuscaService]
    });
  });

  it('should be created', inject([BuscaService], (service: BuscaService) => {
    expect(service).toBeTruthy();
  }));
});
