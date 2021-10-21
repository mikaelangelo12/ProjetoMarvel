import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'app-cadastro-quadrinhos',
  templateUrl: './cadastro-quadrinhos.component.html',
  styleUrls: ['./cadastro-quadrinhos.component.scss']
})


export class CadastroQuadrinhosComponent implements OnInit {
  form: FormGroup | undefined;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]]
    });
  }


  transferir() {
    console.log('Solicitada nova transferência');

  }



}
