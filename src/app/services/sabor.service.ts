import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  API: string = 'http://localhost:8081/saborDTO';
  http = inject(HttpClient);

  constructor(private httpClient: HttpClient) { }

  getSabores(): Observable<Sabor[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.httpClient.get<Sabor[]>(`${this.API}/findall`, { headers });
  }
  listAll(): Observable<Sabor[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.http.get<Sabor[]>(this.API+'/findall', { headers: headers });
  }

  save(sabor: Sabor): Observable<Sabor> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.httpClient.post<Sabor>(`${this.API}/create`, sabor, { headers });
  }

  update(sabor: Sabor): Observable<Sabor> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.httpClient.put<Sabor>(`${this.API}/update`, sabor, { headers });
  }

  exemploErro(): Observable<Sabor[]> {
    const headers = new HttpHeaders()
      .set('Authorization', 'Bearer ' + localStorage.getItem('token'));

    return this.httpClient.get<Sabor[]>(`${this.API}/erro`, { headers });
  }
}
