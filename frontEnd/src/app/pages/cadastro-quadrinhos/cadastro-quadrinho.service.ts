import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroQuadrinhoService {

  URL_API = 'http://localhost:3030/api/cadastroQuadrinho';

  constructor(private http: HttpClient) { }
 
  criar(contato: any) {
    return this.http.post(this.URL_API, contato);
  }
}
