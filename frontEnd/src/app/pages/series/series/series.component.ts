import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from '../../marvelDadosApi';
import { SeriesService } from '../series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  
  series$!: Observable<apiMarvel[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private seriesService:SeriesService ) { }

  ngOnInit() {
  
      this.series$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 20);
          return this.seriesService.listaSeries();
        })
      );
  }

  }
  