import { TestBed } from '@angular/core/testing';

import { BancoDadosService } from './banco-dados.service';

describe('BancoDadosService', () => {
  let service: BancoDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BancoDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
