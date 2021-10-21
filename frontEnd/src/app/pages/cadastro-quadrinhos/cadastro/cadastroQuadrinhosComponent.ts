import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CadastroQuadrinhoService } from '../cadastro-quadrinho.service';




@Component({
  selector: 'app-cadastro-quadrinhos',
  templateUrl: './cadastro-quadrinhos.component.html',
  styleUrls: ['./cadastro-quadrinhos.component.scss']
})

export class CadastroQuadrinhosComponent implements OnInit {
      cadastro: FormGroup | any;
      constructor(private service: CadastroQuadrinhoService) { }

      ngOnInit() {  }

      criar() {
        this.service.criar(this.cadastro.value).subscribe(resposta => {
          this.cadastro.push(resposta);
    
          this.cadastro.reset();
        });
      }
      }
    

