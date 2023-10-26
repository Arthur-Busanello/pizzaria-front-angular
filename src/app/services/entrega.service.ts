import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entrega } from '../models/entrega';

@Injectable({
  providedIn: 'root'
})
export class EntregaService {

  API: string = 'http://localhost:8081/delivery';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(this.API);
  }

  save(entrega: Entrega): Observable<Entrega> {
    return this.http.post<Entrega>(this.API, entrega);
  }

  exemploErro(): Observable<Entrega[]> {
    return this.http.get<Entrega[]>(this.API + '/erro');
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
