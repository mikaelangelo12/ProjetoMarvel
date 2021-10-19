import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Comic } from '../comic';
import { ComicsService } from '../comics.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  url = 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'
  comics$!: Observable<Comic[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private comicsService: ComicsService ) { }

  ngOnInit() {
  
      this.comics$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 10);
          return this.comicsService.listaComics();
        })
      );
  }

  }
  

