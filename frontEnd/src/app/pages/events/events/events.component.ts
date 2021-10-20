import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Eveent } from '../events';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  
  events$!: Observable<Eveent[]>;
  selectedId = 0; 

  constructor( private route: ActivatedRoute, private events: EventsService ) { }

  ngOnInit() {
  
      this.events$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = parseInt(params.get('id')!, 20);
          return this.events.listaEvents();
        })
      );
  }

  }