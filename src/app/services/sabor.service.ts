import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {


  API: string = 'http://localhost:8081/api/saborDTO';

  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API);
  }

  save(sabor: Sabor): Observable<Sabor> {
    return this.http.post<Sabor>(this.API, sabor);
  }

  exemploErro(): Observable<Sabor[]> {
    return this.http.get<Sabor[]>(this.API + '/erro');
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

