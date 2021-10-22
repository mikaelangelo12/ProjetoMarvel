import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from '../../marvelDadosApi';
import { MeusQuadrinhosService } from '../meus-quadrinhos.service';

@Component({
  selector: 'app-meus-quadrinhos',
  templateUrl: './meus-quadrinhos.component.html',
  styleUrls: ['./meus-quadrinhos.component.scss']
})
export class MeusQuadrinhosComponent implements OnInit {

  
  meusQuadrinhos$!: Observable<apiMarvel[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private meusQuadrinhosService: MeusQuadrinhosService ) { }

  ngOnInit() {
  
      this.meusQuadrinhos$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 20);
          return this.meusQuadrinhosService.listaQuadrinhos();
        })
      );
  }

  }