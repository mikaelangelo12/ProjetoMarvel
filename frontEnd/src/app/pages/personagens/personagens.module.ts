import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonagensService } from './personagens.service';
import { PersonagensDetalhesComponent } from './personagens-detalhes/personagens-detalhes.component';
import { PersonagensComponent } from './personagens/personagens.component';
import { FormsModule } from '@angular/forms';
import { ComicsRoutingModule } from '../comics/comics-routing.module';



@NgModule({
  declarations: [
    PersonagensComponent,
    PersonagensDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ComicsRoutingModule,
  ],
  providers:[PersonagensService]
})
export class PersonagensModule { }
