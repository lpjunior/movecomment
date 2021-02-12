import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/Usuario';

const URL_DB = 'http://localhost:3000/usuarios';
const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type' : 'application/json;charset=utf-8'}
  )
};
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http : HttpClient) {}
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

  /* MÉTODOS C.R.U.D */

  // Create
  insereUsuario(usuario : Usuario) {
    return this.http.post(URL_DB, usuario, httpOptions);
  }

  // Retrieve Single
  getUsuario(id: number) {
    return this.http.get<Usuario>(`${URL_DB}/${id}`, httpOptions);
  }

  // Retrieve all
  getUsuarios() {
    return this.http.get<Usuario>(`${URL_DB}`, httpOptions);
  }

  // Retrieve all
  updateUsuario(usuario : Usuario) {
    return this.http.put(`${URL_DB}/${usuario.id}`, usuario, httpOptions);
  }

  // Retrieve all
  deleteUsuarios(id: number) {
    return this.http.delete<Usuario>(`${URL_DB}/${id}`, httpOptions);
  }
}
