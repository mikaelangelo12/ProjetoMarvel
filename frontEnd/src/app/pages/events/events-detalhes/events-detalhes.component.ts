import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { apiMarvel } from '../../marvelDadosApi';

import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-detalhes',
  templateUrl: './events-detalhes.component.html',
  styleUrls: ['./events-detalhes.component.scss']
})
export class EventsDetalhesComponent implements OnInit {
  eveent$!: Observable<apiMarvel>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: EventsService
  ) { }

 

  ngOnInit() {
    this.eveent$ = this.route.paramMap.pipe(
    switchMap((params: ParamMap) =>
    this.service.listaEvent(params.get('id')!))

  );
}

goEveent(eveent: apiMarvel) {
  const eveentId = eveent ? eveent.description : null;

  this.router.navigate(['/events', { id: eveentId, foo: 'foo' }]);
}

}


