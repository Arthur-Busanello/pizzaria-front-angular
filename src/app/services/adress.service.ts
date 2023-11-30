import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Adress } from '../models/adress';

@Injectable({
  providedIn: 'root'
})
export class AdressService {

  API: string = 'http://localhost:8081/Adress';

  constructor(private http: HttpClient) {}

  listAll(): Observable<Adress[]> {
    return this.http.get<Adress[]>(`${this.API}/findall`);
  }

  save(adress: Adress): Observable<Adress> {
    return this.http.post<Adress>(this.API, adress);
  }

  edit(adress: Adress, id: number): Observable<any> {
    return this.http.put(`${this.API}/update?id=${id}`, adress);
  }

  exemploErro(): Observable<Adress[]> {
    return this.http.get<Adress[]>(`${this.API}/erro`);
  }
}
