import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeusQuadrinhosDetalhesComponent } from './meusQuadrinhosDetalhes/meus-quadrinhos-detalhes/meus-quadrinhos-detalhes.component';
import { FormsModule } from '@angular/forms';
import { meusQuadrinhosRoutingModule } from './meus-quadrinhos-routing.module';
import { MeusQuadrinhosService } from './meus-quadrinhos.service';
import { MeusQuadrinhosComponent } from './meusQuadrinhos/meus-quadrinhos.component';



@NgModule({
  declarations: [
    MeusQuadrinhosDetalhesComponent,
    MeusQuadrinhosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    meusQuadrinhosRoutingModule
  ],
  providers:[MeusQuadrinhosService]
})
export class MeusQuadrinhosModule { }
