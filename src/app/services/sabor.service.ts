import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  API: string = 'http://localhost:8081/saborDTO';
  http = inject(HttpClient);

  constructor() { }

  listAll(): Observable<Sabor[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<Sabor[]>(this.API+'/findall', { headers: headers });
  }

  save(sabor: Sabor): Observable<Sabor> { 
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.post<Sabor>(this.API+'/create', sabor, { headers: headers });
  }
  
  update(sabor: Sabor): Observable<Sabor>{
    const headers = new HttpHeaders()
    .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

  return this.http.put<Sabor>(this.API, sabor, { headers: headers });
  }


  exemploErro(): Observable<Sabor[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<Sabor[]>(this.API + '/erro', { headers: headers });
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
