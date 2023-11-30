import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ClientService } from './client.service';
import { Client } from '../models/client';
import { Adress } from '../models/adress';

describe('ClientService', () => {
  let service: ClientService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClientService]
    });

    service = TestBed.inject(ClientService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of client from the API', () => {
    const mockClient: Client[] = [
      {  id: 1,
        nome: 'John Doe',
        phone: '123456789',
        cpf: '12345678901',
        adress: [new Adress()],
        client: [] },
      {  id: 2,
        nome: 'Jon Doe',
        phone: '113456789',
        cpf: '11345678901',
        adress: [new Adress()],
        client: [] }
    ];

    service.listAll().subscribe(client => {
      expect(client).toEqual(mockClient);
    });

    const request = httpMock.expectOne(`${service.API}/findall`);
    expect(request.request.method).toBe('GET');
    request.flush(mockClient);
  });

  it('should save an client via the API', () => {
    const mockClient: Client = { id: 1, nome: 'John Doe', phone: '113456789', cpf: '11345678901', adress: [], client: [] };

    service.save(mockClient).subscribe(savedClient => {
      expect(savedClient).toEqual(mockClient);
    });

    const request = httpMock.expectOne(service.API);
    expect(request.request.method).toBe('POST');
    request.flush(mockClient);
  });

  it('should edit an client via the API', () => {
    const mockClient: Client = { id: 1, nome: 'John Doe', phone: '113456789', cpf: '11345678901', adress: [], client: [] };
    const mockId = 1;

    service.edit(mockClient, mockId).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const request = httpMock.expectOne(`${service.API}/update?id=${mockId}`);
    expect(request.request.method).toBe('PUT');
    request.flush({}); // Assuming your API returns an empty response for successful updates
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
