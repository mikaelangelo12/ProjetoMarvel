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

  
  comics$!: Observable<Comic[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private comicsService: ComicsService ) { }

  ngOnInit() {
  
      this.comics$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 20);
          return this.comicsService.listaComics();
        })
      );
  }

  }
  

