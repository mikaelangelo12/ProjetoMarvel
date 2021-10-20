import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventsRoutingModule } from './events-routing.module';
import { EventsComponent } from './events/events.component';
import { EventsDetalhesComponent } from './events-detalhes/events-detalhes.component';
import { EventsService } from './events.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EventsRoutingModule
  ],
  declarations:[
    EventsComponent,
    EventsDetalhesComponent
  ],
  providers:[EventsService]
})
export class EventsModule { }
