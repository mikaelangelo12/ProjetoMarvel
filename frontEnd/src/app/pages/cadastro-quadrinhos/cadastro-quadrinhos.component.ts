import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-quadrinhos',
  templateUrl: './cadastro-quadrinhos.component.html',
  styleUrls: ['./cadastro-quadrinhos.component.scss']
})

export class CadastroQuadrinhosComponent implements OnInit {
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
