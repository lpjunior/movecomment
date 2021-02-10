import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CorreioService } from 'src/app/services/correio.service';
import { stringify } from 'querystring';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.page.html',
  styleUrls: ['./dados.page.scss'],
})
export class DadosPage implements OnInit {

  // incorporação da classe usuário em DadosPage
  private usuario: Usuario;
  
  usuarioForm : FormGroup;

  txtcep : string;
  txtlogradouro : string;
  txtbairro : string;
  txtcidade : string;
  txtestado : string;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private correioService: CorreioService,
    private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioForm = this.formBuilder.group({

      //atributo: [param1, param2]
      // param1 -> equivale ao valor do campo
      // param2 -> equivale as validações para aquele campo
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
        Validators.required//,
        //Validators.email
      ],
      telefone: [
        '',
        Validators.required
      ],
      cep: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9-]+$/)
        ]
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

  getEnderecoByCEP() {
    this.correioService.getEndereco(this.txtcep).subscribe(
      // => arrow function
      (retorno:any) => {
        //console.log(JSON.stringify(retorno));

        this.txtlogradouro = retorno.logradouro;
        this.txtbairro = retorno.bairro;
        this.txtcidade = retorno.localidade;
        this.txtestado = retorno.uf;

      },

      (error) => {
        console.log(error);
      }
    );
  }

  adicionaUsuario() {
    const novoUsuario = this.usuarioForm.getRawValue() as Usuario;

    this.usuarioService.insereUsuario(novoUsuario).subscribe(
      () => {
        // limpa o formulario
        this.usuarioForm.reset();
      },
      error => {
        console.log(error);
        this.usuarioForm.reset();
      }
    );
  }

  loadUsuarioForm(usuario: Usuario) {
    this.usuarioForm.patchValue(
      {
        nome: usuario.nome,
        dataNasc: usuario.dataNasc,
        email: usuario.email,
        telefone: usuario.telefone,
        cep: usuario.cep,
        logradouro: usuario.logradouro,
        bairro: usuario.bairro,
        cidade: usuario.cidade,
        estado: usuario.estado,
        descricao: usuario.descricao
      }
    );
  }
}

