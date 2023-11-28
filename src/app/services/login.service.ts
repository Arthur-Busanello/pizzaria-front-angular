import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Login } from '../models/login';
import { Usuario } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = 'http://localhost:8081/api/login';
  http = inject(HttpClient);

  constructor() { }


  logar(login: Login): Observable<Usuario> {
    return this.http.post<Usuario>(this.API, login);
  }

  deslogar(): Observable<any> {
    return this.http.get<any>(this.API+'/deslogar');
  }



  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }


}