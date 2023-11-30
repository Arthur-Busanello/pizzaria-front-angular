import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProdutosService } from './produtos.service';
import { Client } from '../models/client';
import { Adress } from '../models/adress';
import { Produto } from '../models/produto';

describe('ProdutosService', () => {
  let service: ProdutosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutosService]
    });

    service = TestBed.inject(ProdutosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of client from the API', () => {
    const mockProduto: Produto[] = [
      {   id: 1,
        codigo: '123123',
        preco:5,
        tamanho:'gg',
        extra:'nao',
        remove:'nao',
        sabor: []},

      {  id: 2,
        codigo: '123aa123',
        preco:3,
        tamanho:'g',
        extra:'nao',
        remove:'nao',
        sabor: []}
    ];

    service.listAll().subscribe(produto => {
      expect(produto).toEqual(mockProduto);
    });

    const request = httpMock.expectOne(`${service.API}/findall`);
    expect(request.request.method).toBe('GET');
    request.flush(mockProduto);
  });

  it('should save an produto via the API', () => {
    const mockProduto: Produto = { id: 1, codigo: '123aa123', preco: 3, tamanho: 'g', extra: 'nao', remove: 'nao', sabor: [] };
  
    service.save(mockProduto).subscribe(savedProduto => {
      expect(savedProduto).toEqual(mockProduto);
    });
  
    const request = httpMock.expectOne('http://localhost:8081/Item/create');
    expect(request.request.method).toBe('POST');
    request.flush(mockProduto);
  });


  it('should handle an error from the API', () => {
    const errorMessage = 'Internal Server Error';
    service.exemploErro().subscribe(
      () => fail('Should have failed with an error'),
      error => {
        expect(error).toBeTruthy();
        expect(error.status).toBe(500); // Assuming your API returns a 500 status code for an error
        expect(error.error).toBe(errorMessage);
      }
    );

    const request = httpMock.expectOne(`${service.API}/erro`);
    expect(request.request.method).toBe('GET');
    request.flush(errorMessage, { status: 500, statusText: 'Internal Server Error' });
  });
});
