import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { apiMarvel } from '../marvelDadosApi';

@Injectable({
  providedIn: 'root'
})
export class PersonagensService {

  URL_API = 'https://gateway.marvel.com/v1/public/characters?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';
  //URL_API = 'http://localhost:3000/api/personagens'
    constructor(private http: HttpClient) {}
    

  listaPersonagens(){  
    return this.http.get<apiMarvel[]>(this.URL_API)
    .pipe(map((data: any)=> data.data.results))
  } 

  listaPersonagem(id:  number | string)  {
    return this.listaPersonagens().pipe(
      map((personagens: apiMarvel[]) => personagens.find(personagem => personagem.id === +id)!)
    );
   }
   
  
}
