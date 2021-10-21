import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Person } from '../person';
import { PersonagensService } from '../personagens.service';

@Component({
  selector: 'app-personagens-detalhes',
  templateUrl: './personagens-detalhes.component.html',
  styleUrls: ['./personagens-detalhes.component.scss']
})
export class PersonagensDetalhesComponent implements OnInit {

  personagem$!: Observable<Person>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: PersonagensService
  ) { }

 

  ngOnInit() {
    this.personagem$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.listaPersonagem(params.get('id')!))

  );
}

goPersonagens(person: Person) {
  const personId = person ? person.description : null;

  this.router.navigate(['/personagens', { id: personId, foo: 'foo' }]);
}

}
