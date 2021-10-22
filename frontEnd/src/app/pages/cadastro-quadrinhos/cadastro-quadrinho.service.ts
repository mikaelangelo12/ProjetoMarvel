import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CadastroQuadrinhoService {

  URL_API = 'http://localhost:3030/api/cadastroQuadrinho';

  constructor(private http: HttpClient) { }

create(cadastro: any){
  return this.http.post(this.URL_API, cadastro).pipe(take(1))
}
}

