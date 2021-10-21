import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroQuadrinhosComponent } from "./cadastro/cadastroQuadrinhosComponent";



@NgModule({
  declarations: [
    CadastroQuadrinhosComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CadastroQuadrinhoModule { }
