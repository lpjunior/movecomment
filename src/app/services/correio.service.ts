import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const URL_VIACEP = 'http://viacep.com.br/ws';

@Injectable({
  providedIn: 'root'
})
export class CorreioService {

  /**
   * Verbos HTTP
   * Mais usados são:
   * POST -> é comumente usado para envio de formularios
   * GET -> é comumente usado para resgate de informações
   * DELETE -> é usado para exclusão de dados
   * UPDATE -> é comumente usado para atualização de um ou mais registros
   * PATCH -> é comumente usado para atualizar parte de um registro
   * https://www.devmedia.com.br/servicos-restful-verbos-http/37103
  **/
  constructor(private http : HttpClient) { }

  public getEndereco(cep:string){
    return this.http.get(`${URL_VIACEP}/${cep}/json/`);
  }
}