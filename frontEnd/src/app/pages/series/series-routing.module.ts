import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { SeriesDetalhesComponent } from './series-detalhes/series-detalhes.component';


const seriesRoutes: Routes = [
  { path: 'Series', redirectTo: '/series' },
  { path: 'Serie/:id', redirectTo: '/serie/:id' },
  { path: 'Series',  component: SeriesComponent},
  { path: 'serie/:id', component: SeriesDetalhesComponent }
];



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(seriesRoutes),
    CommonModule,
  ],
  exports:[
    RouterModule
  ]
})
export class SeriesRoutingModule { }
