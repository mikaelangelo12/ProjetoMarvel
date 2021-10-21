import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesRoutingModule } from './series-routing.module';
import { SeriesService } from './series.service';
import { FormsModule } from '@angular/forms';
import { SeriesComponent } from './series/series.component';
import { SeriesDetalhesComponent } from './series-detalhes/series-detalhes.component';



@NgModule({
  declarations: [
    SeriesComponent,
    SeriesDetalhesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SeriesRoutingModule
  ],
  providers:[SeriesService]
})
export class SeriesModule { }
