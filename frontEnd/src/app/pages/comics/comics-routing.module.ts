import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetalhesComponent } from './comics-detalhes/comics-detalhes.component';

const comicsRoutes: Routes = [
  { path: 'Comics', redirectTo: '/comics' },
  { path: 'Comic/:id', redirectTo: '/comic/:id' },
  { path: 'comics',  component: ComicsComponent},
  { path: 'comic/:id', component: ComicsDetalhesComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(comicsRoutes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class ComicsRoutingModule { }
