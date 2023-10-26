import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders , HttpErrorResponse} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Client } from '../models/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
 
  API: string = 'http://localhost:8081/Order';
  http = inject(HttpClient);

  constructor() { };

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Ocorreu um problema com o site ou com a internet:', error.error);
    } else {
      console.error('Estamos com problemas no servidor: ', error.error)
    }

    return throwError(() => new Error('Falha em requisitar informações ao servidor, por favor tente novamente'));
  }



  listAllclient () :any {
    return this.http.get('http://localhost:8081/client/findall').pipe(catchError(this.handleError));
  }

  addclient (client : any ) : Observable<Client> {
    let options = this.getStandardOptions();
    let clients = this.http.post('http://localhost:8081/client',client,options);

   const clientsObservable = clients
   .pipe(
     map((buffer: ArrayBuffer) => JSON.parse(JSON.stringify(buffer)))
   );


  return clientsObservable;

  }


  updateClient (client : any, id : number ) :Observable<Client> {
    let options = this.getStandardOptions();
    let client_update = this.http.put('http://localhost:8081/client/update?id='+id ,JSON.stringify(client),options);

   const clientsObservable = client_update
   .pipe(
     map((buffer: ArrayBuffer) => JSON.parse(JSON.stringify(buffer)))
   );


  return clientsObservable;



  }



  deleteSabor (id : number ) :any {
    let options = this.getStandardOptions();
    return this.http.delete('http://localhost:8081/client?id='+id,options).subscribe();

  }

}