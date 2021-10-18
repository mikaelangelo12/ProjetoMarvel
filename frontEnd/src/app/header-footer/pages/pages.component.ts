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
  conteudoStories = "Stories"

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
  goStories(){
    this.router.navigate(['stories'])
  }

}
