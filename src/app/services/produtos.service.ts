import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  API: string = 'http://localhost:8081/Item';
  http = inject(HttpClient);

  constructor(private httpClient: HttpClient) { }


  listAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API+'/findall');
  }
  getSabor(): Observable<Sabor[]> {
    return this.httpClient.get<Sabor[]>('http://localhost:3000/sabores/findall');
  }

  save(produto: Produto): Observable<Produto> {
    return this.httpClient.post<Produto>(this.API+'/create', produto);
  }

  exemploErro(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API + '/erro');
  }



  /*
  CASO PRECISE ENVIAR REQUEST PARAMS, BASTA DECLARAR ASSIM E INCLUIR NA REQUISIÇÃO HTTP

  let params = new HttpParams()
      .set('empresaId', empresaId.toString())

  return this.http.get<Pessoa[]>(this.API, { params: params});

  
  
  SE PRECISAR COLOCAR COISAS NO HEADER DA REQUISIÇÃO


      let headers = new HttpHeaders()
      .set("Content-Type", "application/json");


        return this.http.get<Pessoa[]>(this.API, { headers: headers});



  */


}