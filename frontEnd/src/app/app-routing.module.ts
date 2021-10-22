import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroQuadrinhosComponent } from "./pages/cadastro-quadrinhos/cadastro/cadastroQuadrinhosComponent";
import { ComicsComponent } from './pages/comics/comics/comics.component';
import { EventsComponent } from './pages/events/events/events.component';
import { MeusQuadrinhosComponent } from './pages/meus-quadrinhos/meusQuadrinhos/meus-quadrinhos.component';
import { PersonagensComponent } from './pages/personagens/personagens/personagens.component';
import { SeriesComponent } from './pages/series/series/series.component';

const routes: Routes = [
  {
    path:'comics',
    component: ComicsComponent, pathMatch: 'full' 
  },
  {
    path:'events',
    component: EventsComponent, pathMatch: 'full' 
  },
  {
    path:'personagens',
    component: PersonagensComponent, pathMatch: 'full' 
  },
  {
    path:'series',
    component: SeriesComponent, pathMatch: 'full' 
  },
  {
    path:'cadastro-quadrinhos',
    component: CadastroQuadrinhosComponent, pathMatch: 'full' 
  },
  {
    path:'meus-quadrinhos',
    component: MeusQuadrinhosComponent, pathMatch: 'full' 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
