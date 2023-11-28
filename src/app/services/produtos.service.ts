import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private baseURL = 'http://localhost:8081/api/produto';
  http = inject(HttpClient);

  constructor(private httpClient: HttpClient, private cookieService : CookieService) { }

  token!: string;

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    };
  }


  listAll() :any {

    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   


    return this.httpClient.get(`${this.baseURL}/listAll`,options);
  }
 

  showStock(id:number) :any {

    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   


    return this.httpClient.get(`${this.baseURL}/show?id=${id}`,options);
  }


  save(newProduto: any): any {
    this.token =  this.cookieService.get("JWT");

    let options = this.getStandardOptions();
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)
   



    return this.httpClient.post(`${this.baseURL}/save`,JSON.stringify(newProduto) , options);
  }

  updateStock(id: number, stockData: any) {
    let option = this.getStandardOptions();
    console.log(stockData);
    
    option.headers = option.headers.set('Authorization', `Bearer ${this.token}`)
    return this.httpClient.put(`${this.baseURL}/updateContent${id}`, stockData, option);
  }

  deleteStock(id: number): any {
    let options = this.getStandardOptions();
    
    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    console.log("delete-token:\t" + this.token);

    console.log(options);

    return this.httpClient.delete(`${this.baseURL}/deletecontent?id=${id}`,options);
  }


  createStockContent(addContent: any): any {
    
    this.token = this.cookieService.get("JWT");

    let options = this.getStandardOptions();

    console.log(this.token);

    options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

    return this.httpClient.post(`${this.baseURL }/addContent`, addContent,  options);
}


updateQuantidade(id: number, update: any): any {
  
    
  this.token = this.cookieService.get("JWT");

  let options = this.getStandardOptions();

  console.log(this.token);

  options.headers = options.headers.set('Authorization', `Bearer ${this.token}`)

  return this.httpClient.put(`${this.baseURL }/updateContent?id=${id}`, update, options);

}


}