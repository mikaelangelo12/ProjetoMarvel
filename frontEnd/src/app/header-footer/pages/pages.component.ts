import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  conteudoComics = "Comics"
  conteudoEvents = "Events"
  conteudoPersonagens = "Personagens"
  conteudoSeries = "Series"
  conteudoMeusQuadrinhos = "Meus Quadrinhos"
  conteudoCadastroQuadrinhos = "Cadastro de Quadrinhos"
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goComics();
  }
  goComics(){
    this.router.navigate(['comics'])
  }
  goEvents(){
    this.router.navigate(['events'])
  }
  goPersonagens(){
    this.router.navigate(['personagens'])
  }
  goSeries(){
    this.router.navigate(['series'])
  }
  goMeusQuadrinhos(){
    this.router.navigate(['meus-quadrinhos'])
  }
  goCadastroQuadrinhos(){
    this.router.navigate(['cadastro-quadrinhos'])
  }
}
