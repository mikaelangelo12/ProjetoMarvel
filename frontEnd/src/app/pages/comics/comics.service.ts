import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Comic } from './comic';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

//URL_API = 'https://gateway.marvel.com/v1/public/comics?ts=thesoer&apikey=001ac6c73378bbfff488a36141458af2&hash=72e5ed53d1398abb831c3ceec263f18b';
 URL_API = 'http://localhost:3030/api/comics'
    constructor(private http: HttpClient) {}
    

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
