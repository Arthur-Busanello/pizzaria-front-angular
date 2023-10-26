import { Injectable, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { sabor } from '../models/sabor';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  constructor(private http : HttpClient) { }

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

    const sabor_dto = {
      nome:sabor.nome,
      preco_adicional:sabor.preco_adicional,
      descricao:sabor.descricao
    }


    return this.http.post('http://localhost:8081/sabor',sabor_dto,options);
    
  }


}
