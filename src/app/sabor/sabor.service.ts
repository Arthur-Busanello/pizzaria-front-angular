import { Injectable, inject } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { sabor } from '../models/sabor';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

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




  getAllSabor () :any {
    return this.http.get('http://localhost:8081/sabor/findall').pipe(catchError(this.handleError));
  }





  addSabor (sabor : any ) :any { 

    let options = this.getStandardOptions();

  
    return this.http.post('http://localhost:8081/sabor',sabor,options).subscribe();
    
  }


}
