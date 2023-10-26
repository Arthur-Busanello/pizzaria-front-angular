import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  delete(id: any) {
    throw new Error('Method not implemented.');
  }

  API: string = 'http://localhost:8080/api/client';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.API);
  }

  save(client: Client): Observable<Client> {
    return this.http.post<Client>(this.API, client);
  }

  exemploErro(): Observable<Client[]> {
    return this.http.get<Client[]>(this.API + '/erro');
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
