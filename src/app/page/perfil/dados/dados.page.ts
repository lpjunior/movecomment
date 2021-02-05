import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CorreioService } from 'src/app/services/correio.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  // incorporação da classe usuário em DadosPage
  private usuario: Usuario;
  
  usuarioForm : FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private correioService: CorreioService,
    /*private usuarioService: UsuarioService*/) {}

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({
      nome: [
        '', // valor inicial
        [ // validações
          Validators.required, // campo obrigatorio
          Validators.minLength(2), // tamanho minimo
          Validators.maxLength(150), // tamanho maximo
          Validators.pattern(/^[a-zA-Z0-9 ]+$/) // validação usando regex
        ]
      ],
      dataNasc: [
        '',
        Validators.required
      ],
      email: [
        '',
        Validators.required,
        Validators.email
      ],
      telefone: [
        '',
        Validators.required
      ],
      cep: [
        '',
        Validators.required
      ],
      logradouro: [
        '',
        Validators.required
      ],
      bairro: [
        '',
        Validators.required
      ],
      cidade: [
        '',
        Validators.required
      ],
      estado: [
        '',
        Validators.required
      ],
      descricao: [
        '',
        Validators.required
      ]
    });
  }

}
