import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdressService } from './adress.service';
import { Adress } from '../models/adress';

describe('AdressService', () => {
  let service: AdressService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AdressService]
    });

    service = TestBed.inject(AdressService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of addresses from the API', () => {
    const mockAddresses: Adress[] = [
      { id: 1, cidade: 'City', rua: 'Street', numero_rua: 123, client: [  ], adress: [  ] },
      { id: 2, cidade: 'City', rua: 'Street', numero_rua: 123, client: [  ], adress: [  ] }
    ];

    service.listAll().subscribe(addresses => {
      expect(addresses).toEqual(mockAddresses);
    });

    const request = httpMock.expectOne(`${service.API}/findall`);
    expect(request.request.method).toBe('GET');
    request.flush(mockAddresses);
  });

  it('should save an address via the API', () => {
    const mockAddress: Adress = { id: 1, cidade: 'City1', rua: 'Street1', numero_rua: 123, client: [], adress: [] };

    service.save(mockAddress).subscribe(savedAddress => {
      expect(savedAddress).toEqual(mockAddress);
    });

    const request = httpMock.expectOne(service.API);
    expect(request.request.method).toBe('POST');
    request.flush(mockAddress);
  });

  it('should edit an address via the API', () => {
    const mockAddress: Adress = { id: 1, cidade: 'City1', rua: 'Street1', numero_rua: 123, client: [], adress: [] };
    const mockId = 1;

    service.edit(mockAddress, mockId).subscribe(response => {
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
