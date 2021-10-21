import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Comic } from '../../comics/comic';
import { Serie } from '../serie';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series-detalhes',
  templateUrl: './series-detalhes.component.html',
  styleUrls: ['./series-detalhes.component.scss']
})
export class SeriesDetalhesComponent implements OnInit {
  
  serie$!: Observable<Serie>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SeriesService
  ) { }

 

  ngOnInit() {
    this.serie$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.listaSerie(params.get('id')!))

  );
}

goSeries(serie: Serie) {
  const comicId = serie ? serie.description : null;

  this.router.navigate(['/series', { id: comicId, foo: 'foo' }]);
}

}