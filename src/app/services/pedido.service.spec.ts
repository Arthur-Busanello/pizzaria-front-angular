import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PedidosService } from './pedidos.service';

import { Produto } from '../models/produto';
import { Pedido } from '../models/pedido';

describe('PedidosService', () => {
  let service: PedidosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PedidosService]
    });

    service = TestBed.inject(PedidosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of pedidos from the API', () => {
    const mockPedido: Pedido[] = [
      {   id: 1,
        time: '16:39,00',
        day: '30/11/2023',
        payment: 'pix',
        status: 'feito',
        description: 'teste',
        data: '30/11/2023',
        produtos: [],
        client:[]},

      { id: 2,
        time: '15:39,00',
        day: '29/11/2023',
        payment: 'cartao',
        status: 'feito',
        description: 'teste',
        data: '30/11/2023',
        produtos: [],
        client:[]},
    ];

    service.listAll().subscribe(pedido => {
      expect(pedido).toEqual(mockPedido);
    });

    const request = httpMock.expectOne(`${service.API}/findall`);
    expect(request.request.method).toBe('GET');
    request.flush(mockPedido);
  });

  it('should save an pedido via the API', () => {
    const mockPedido: Pedido = { id: 1,time:'aaa', day: '30/11/2023', payment: 'pix', status: 'feito', description: 'teste', data: '30/11/2023',produtos: [],client:[]};
  
    service.save(mockPedido).subscribe(savedPedido => {
      expect(savedPedido).toEqual(mockPedido);
    });
  
    const request = httpMock.expectOne('http://localhost:8081/Order/create');
    expect(request.request.method).toBe('POST');
    request.flush(mockPedido);
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
