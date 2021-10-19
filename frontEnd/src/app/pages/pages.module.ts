import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicsComponent } from './comics/comics/comics.component';
import { EventsComponent } from './events/events.component';
import { SeriesComponent } from './series/series.component';
import { StoriesComponent } from './stories/stories.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { CadastroQuadrinhosComponent } from './cadastro-quadrinhos/cadastro-quadrinhos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ComicsModule } from './comics/comics.module';

@NgModule({
  declarations: [
    EventsComponent,
    SeriesComponent,
    StoriesComponent,
    PersonagensComponent,
    CadastroQuadrinhosComponent,    
  ],
  imports: [
    ComicsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[ EventsComponent, SeriesComponent, StoriesComponent, CadastroQuadrinhosComponent]
})
export class PagesModule { }
