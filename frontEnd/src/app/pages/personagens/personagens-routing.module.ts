import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PersonagensComponent } from './personagens/personagens.component';
import { PersonagensDetalhesComponent } from './personagens-detalhes/personagens-detalhes.component';

const personagensRoutes: Routes = [
  { path: 'Personagens', redirectTo: '/personagens' },
  { path: 'Personagem/:id', redirectTo: '/personagem/:id' },
  { path: 'Personagens',  component: PersonagensComponent},
  { path: 'personagem/:id', component: PersonagensDetalhesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(personagensRoutes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class PersonagensRoutingModule { }
