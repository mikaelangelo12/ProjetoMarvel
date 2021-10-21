import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EventsComponent } from './events/events.component';
import { EventsDetalhesComponent } from './events-detalhes/events-detalhes.component';

const eventesRoutes: Routes = [
  { path: 'Events', redirectTo: '/events' },
  { path: 'Eveent/:id', redirectTo: '/eveent/:id' },
  { path: 'events',  component: EventsComponent},
  { path: 'eveent/:id', component: EventsDetalhesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(eventesRoutes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class EventsRoutingModule { }
