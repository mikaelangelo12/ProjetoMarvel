import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsComponent } from './comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { PersonagensComponent } from './personagens/personagens.component';



@NgModule({
  declarations: [
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    PersonagensComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[ComicsComponent, EventsComponent, SeriesComponent, StoriesComponent]
})
export class PagesModule { }
