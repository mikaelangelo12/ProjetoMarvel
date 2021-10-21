import { TestBed } from '@angular/core/testing';

import { CadastroQuadrinhoService } from './cadastro-quadrinho.service';

describe('CadastroQuadrinhoService', () => {
  let service: CadastroQuadrinhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CadastroQuadrinhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
