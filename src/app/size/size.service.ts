import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import options from 'cheerio/lib/options';
import { Observable, catchError, map, throwError } from 'rxjs';
import { size } from '../models/size';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  @Injectable({
    providedIn: 'root'
  })


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



    findAll () :any {
      return this.http.get('http://localhost:8081/size/findall').pipe(catchError(this.handleError));
    }




    addSize (size : any ) : Observable<size> {
     let options = this.getStandardOptions();
     let sizes = this.http.post('http://localhost:8081/size',size,options);

     const sizeesObservable = sizes
     .pipe(
       map((buffer: ArrayBuffer) => JSON.parse(JSON.stringify(buffer)))
     );


    return sizeesObservable;

    }


    updateSize (size : any, id : number ) :Observable<size> {
      let options = this.getStandardOptions();
     let size_updated = this.http.put('http://localhost:8081/size/update?id='+id ,JSON.stringify(size),options);

     const sizeesObservable = size_updated
     .pipe(
       map((buffer: ArrayBuffer) => JSON.parse(JSON.stringify(buffer)))
     );


    return sizeesObservable;



    }


    deletesize (id : number ) :any {
      let options = this.getStandardOptions();
      return this.http.delete('http://localhost:8081/size?id='+id,options).subscribe();

    }



}
