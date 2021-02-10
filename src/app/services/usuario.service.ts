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

  /* MÉTODOS C.R.U.D */

  insereUsuario(usuario : Usuario) {
    return this.http.post(URL_DB, usuario, httpOptions);
  }
}
