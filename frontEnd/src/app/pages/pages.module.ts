import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ComicsModule } from './comics/comics.module';

import { EventsModule } from './events/events.module';
import { PersonagensModule } from './personagens/personagens.module';
import { SeriesModule } from './series/series.module';
import { CadastroQuadrinhoModule } from './cadastro-quadrinhos/cadastro-quadrinho.module';


@NgModule({
  declarations: [   


  ],
  imports: [
    ComicsModule,
    CadastroQuadrinhoModule,
    PersonagensModule,
    EventsModule,
    SeriesModule,    
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports:[ ]
})
export class PagesModule { }
