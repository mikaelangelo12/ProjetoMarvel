import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Eveent } from '../events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events-detalhes',
  templateUrl: './events-detalhes.component.html',
  styleUrls: ['./events-detalhes.component.scss']
})
export class EventsDetalhesComponent implements OnInit {
  eveent$!: Observable<Eveent>;

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

goEveent(eveent: Eveent) {
  const eveentId = eveent ? eveent.description : null;

  this.router.navigate(['/events', { id: eveentId, foo: 'foo' }]);
}

}


