import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CadastroQuadrinhoService } from '../cadastro-quadrinho.service';
import { dadosdeCadastro } from '../cadastroItens';




@Component({
  selector: 'app-cadastro-quadrinhos',
  templateUrl: './cadastro-quadrinhos.component.html',
  styleUrls: ['./cadastro-quadrinhos.component.scss']
})

export class CadastroQuadrinhosComponent implements OnInit {
      cadastro: FormGroup | any;
      submitted = false;
      constructor(private service: CadastroQuadrinhoService) { }

      ngOnInit() {  }



      onSubmit() {
        this.service.criar(this.cadastro.value).subscribe(resposta => {         
          this.cadastro = new FormGroup({
            firstName: new FormControl(resposta)
          })
     
        });
      }
      }
    

