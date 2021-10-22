import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroQuadrinhosComponent } from "./cadastro/cadastroQuadrinhosComponent";
import { CadastroQuadrinhoService } from './cadastro-quadrinho.service';



@NgModule({
  declarations: [
    CadastroQuadrinhosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[CadastroQuadrinhoService]
})
export class CadastroQuadrinhoModule { }
