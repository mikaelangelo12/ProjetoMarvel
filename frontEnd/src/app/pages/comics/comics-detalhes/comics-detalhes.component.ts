import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ComicsService } from '../comics.service';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from '../../marvelDadosApi';

@Component({
  selector: 'app-comics-detalhes',
  templateUrl: './comics-detalhes.component.html',
  styleUrls: ['./comics-detalhes.component.scss']
})

export class ComicsDetalhesComponent implements OnInit {
  
  comic$!: Observable<apiMarvel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ComicsService
  ) { }

 

  ngOnInit() {
    this.comic$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.listaComic(params.get('id')!))

  );
}

goComics(comic: apiMarvel) {
  const comicId = comic ? comic.description : null;

  this.router.navigate(['/comics', { id: comicId, foo: 'foo' }]);
}

}


