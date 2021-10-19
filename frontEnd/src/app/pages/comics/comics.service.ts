import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATH } from 'src/environments/environment';
import { Comic } from './comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  PUBLIC_KEY = 'b091e4f619436453d9a951e666a18be8'
  HASH = '72e5ed53d1398abb831c3ceec263f18b'
  URL_API = 'https://gateway.marvel.com/v1/public/comics?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';

    constructor(private http: HttpClient) {  
     // this.listaSerie = [{id:1, title:"Mikael", thumbnail:"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"},this.http.get<Comic[]>(`${API_PATH}`)]
    }
    

  listaComics(){  
    return this.http.get<Comic[]>(this.URL_API)
    .pipe(map((data: any)=> data.data.results))
  } 

  listaComic(id:  number | string)  {
    return this.listaComics().pipe(
      map((comics: Comic[]) => comics.find(comic => comic.id === +id)!)
    );
   }
   
  
}
