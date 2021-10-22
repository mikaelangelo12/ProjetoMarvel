
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CadastroQuadrinhoService } from '../cadastro-quadrinho.service';





@Component({
  selector: 'app-cadastro-quadrinhos',
  templateUrl: './cadastro-quadrinhos.component.html',
  styleUrls: ['./cadastro-quadrinhos.component.scss']
})

export class CadastroQuadrinhosComponent implements OnInit {
  form!: FormGroup;

  constructor(private service: CadastroQuadrinhoService, private fb: FormBuilder) { }
      
      ngOnInit() {  
        this.form = this.fb.group({
          nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          descricao: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          category: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          preco: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
          thumbnail: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]],
        })
      }

     onSubmit(){
       console.log(this.form.value)
       if(this.form.valid){
         console.log('submit')
         this.service.create(this.form.value).subscribe(
                  success => console.log(success),
                  error => console.error(error),
           () => {
             return console.log('request completo');
           }
         );
       }
     }

}
    

