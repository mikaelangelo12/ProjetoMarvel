import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from '../../marvelDadosApi';
import { PersonagensService } from '../personagens.service';

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss']
})
export class PersonagensComponent implements OnInit {

  personagens$!: Observable<apiMarvel[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private personagensService: PersonagensService ) { }

  ngOnInit() {
  
      this.personagens$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 300);
          return this.personagensService.listaPersonagens();
        })
      );
  }

  }
  