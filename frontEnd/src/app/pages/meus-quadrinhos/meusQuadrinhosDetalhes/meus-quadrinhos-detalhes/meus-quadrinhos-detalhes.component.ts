import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from 'src/app/pages/marvelDadosApi';
import { MeusQuadrinhosService } from '../../meus-quadrinhos.service';

@Component({
  selector: 'app-meus-quadrinhos-detalhes',
  templateUrl: './meus-quadrinhos-detalhes.component.html',
  styleUrls: ['./meus-quadrinhos-detalhes.component.scss']
})
export class MeusQuadrinhosDetalhesComponent implements OnInit {

  quadrinho$!: Observable<apiMarvel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MeusQuadrinhosService
  ) { }

 

  ngOnInit() {
    this.quadrinho$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.listaQuadrinho(params.get('id')!))

  );
}

goQuadrinho(quadrinho: apiMarvel) {
  const quadrinhoId = quadrinho ? quadrinho.description : null;

  this.router.navigate(['/quadrinhos', { id: quadrinhoId, foo: 'foo' }]);
}

}


