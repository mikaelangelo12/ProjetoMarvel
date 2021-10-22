import { TestBed } from '@angular/core/testing';

import { MeusQuadrinhosService } from './meus-quadrinhos.service';

describe('MeusQuadrinhosService', () => {
  let service: MeusQuadrinhosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeusQuadrinhosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
