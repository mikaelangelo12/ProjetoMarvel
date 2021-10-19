import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroQuadrinhosComponent } from './pages/cadastro-quadrinhos/cadastro-quadrinhos.component';
import { ComicsComponent } from './pages/comics/comics/comics.component';
import { EventsComponent } from './pages/events/events.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { SeriesComponent } from './pages/series/series.component';
import { StoriesComponent } from './pages/stories/stories.component';

const routes: Routes = [
  {
    path:'comics',
    component: ComicsComponent
  },
  {
    path:'events',
    component: EventsComponent
  },
  {
    path:'personagens',
    component: PersonagensComponent
  },
  {
    path:'series',
    component: SeriesComponent
  },
  {
    path:'stories',
    component: StoriesComponent
  },
  {
    path:'cadastro-quadrinhos',
    component: CadastroQuadrinhosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
