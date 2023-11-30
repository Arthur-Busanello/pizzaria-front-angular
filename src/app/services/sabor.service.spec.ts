import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SaborService } from './sabor.service';
import { Sabor } from '../models/sabor';


describe('SaborService', () => {
  let service: SaborService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [SaborService]
    });

    service = TestBed.inject(SaborService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Ensure that there are no outstanding HTTP requests
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a list of sabor from the API', () => {
    const mockSabor: Sabor[] = [
      {  id: 1,
        nome: 'calabresa',
        preco_adicional: 5,
        descricao: 'tem calabresa',
        sabor: [] },
      {  id: 2,
        nome: ' frango',
        preco_adicional: 5,
        descricao: 'tem frango',
        sabor: [] },
    ];

    service.listAll().subscribe(sabor => {
      expect(sabor).toEqual(mockSabor);
    });

    const request = httpMock.expectOne(`${service.API}/findall`);
    expect(request.request.method).toBe('GET');
    request.flush(mockSabor);
  });

  it('should save an sabor via the API', () => {
    const mockSabor: Sabor = { id: 1, nome: 'John Doe', preco_adicional: 5, descricao: 'tem frango',  sabor: [] };

    service.save(mockSabor).subscribe(savedSabor => {
      expect(savedSabor).toEqual(mockSabor);
    });

    const request = httpMock.expectOne(service.API);
    expect(request.request.method).toBe('POST');
    request.flush(mockSabor);
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
