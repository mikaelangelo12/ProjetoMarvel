import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MeusQuadrinhosComponent } from './meusQuadrinhos/meus-quadrinhos.component';
import { MeusQuadrinhosDetalhesComponent } from './meusQuadrinhosDetalhes/meus-quadrinhos-detalhes/meus-quadrinhos-detalhes.component';

const meuQuadrinhosRoutes: Routes = [
  { path: 'Quadrinhos', redirectTo: '/quadrinhos' },
  { path: 'Quadrinho/:id', redirectTo: '/quadrinho/:id' },
  { path: 'quadrinhos',  component: MeusQuadrinhosComponent},
  { path: 'quadrinho/:id', component: MeusQuadrinhosDetalhesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(meuQuadrinhosRoutes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class meusQuadrinhosRoutingModule { }
