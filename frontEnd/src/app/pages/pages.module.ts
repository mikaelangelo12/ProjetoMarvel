import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesComponent } from './series/series/series.component';
import { StoriesComponent } from './stories/stories/stories.component';
import { PersonagensComponent } from './personagens/personagens/personagens.component';
import { CadastroQuadrinhosComponent } from './cadastro-quadrinhos/cadastro-quadrinhos.component';

import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ComicsModule } from './comics/comics.module';

import { PersonagensDetalhesComponent } from './personagens/personagens-detalhes/personagens-detalhes.component';
import { SeriesDetalhesComponent } from './series/series-detalhes/series-detalhes.component';
import { StoriesDetalhesComponent } from './stories/stories-detalhes/stories-detalhes.component';
import { EventsModule } from './events/events.module';

@NgModule({
  declarations: [   
    SeriesComponent,
    StoriesComponent,
    PersonagensComponent,
    CadastroQuadrinhosComponent,
    PersonagensDetalhesComponent,
    SeriesDetalhesComponent,
    StoriesDetalhesComponent,    
  ],
  imports: [
    ComicsModule,
    EventsModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[ SeriesComponent, StoriesComponent, CadastroQuadrinhosComponent]
})
export class PagesModule { }
