import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  API: string = 'http://localhost:8081/Adress';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Adress[]> {
    return this.http.get<Adress[]>(this.API+'/findall');
  }

  save(adress: Adress): Observable<Adress> {
    return this.http.post<Adress>(this.API, adress);
  }
  edit(adress: Adress , id : number) {
    return this.http.put(this.API+'/update?id='+ id , adress);
  }

  exemploErro(): Observable<Adress[]> {
    return this.http.get<Adress[]>(this.API + '/erro');
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
