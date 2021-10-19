import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComicsRoutingModule } from './comics-routing.module';
import { ComicsDetalhesComponent } from './comics-detalhes/comics-detalhes.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsService } from './comics.service';



@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    ComicsRoutingModule,

  ],
  declarations:[
    ComicsComponent,
    ComicsDetalhesComponent
  ],
  providers:[ComicsService]
})
export class ComicsModule { }
