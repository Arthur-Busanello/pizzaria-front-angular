import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AdresslistComponent } from './adresslist.component';
import { AdressService } from 'src/app/services/adress.service';
import { of } from 'rxjs';
import { Adress } from 'src/app/models/adress';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { throwError } from 'rxjs';

describe('AdresslistComponent', () => {
  let component: AdresslistComponent;
  let fixture: ComponentFixture<AdresslistComponent>;
  let mockAdressService: jasmine.SpyObj<AdressService>;
  let mockNgbModal: jasmine.SpyObj<NgbModal>;

  beforeEach(waitForAsync(() => {
    mockAdressService = jasmine.createSpyObj<AdressService>('AdressService', ['listAll', 'save', 'edit', 'exemploErro']);
    mockNgbModal = jasmine.createSpyObj('NgbModal', ['open']);

    TestBed.configureTestingModule({
      declarations: [AdresslistComponent],
      providers: [
        { provide: AdressService, useValue: mockAdressService },
        { provide: NgbModal, useValue: mockNgbModal },
      ],
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(AdresslistComponent);
      component = fixture.componentInstance;
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll method and populate lista on success', () => {
    const mockAdresses: Adress[] = [
      { id: 1, cidade: 'City1', rua: 'Street1', numero_rua: 123, client: [], adress: [] },
      { id: 2, cidade: 'City2', rua: 'Street2', numero_rua: 456, client: [], adress: [] },
    ];

    component.lista = []; // Certifique-se de inicializar component.lista

    mockAdressService.listAll.and.returnValue(of(mockAdresses));

    component.listAll();

    expect(mockAdressService.listAll).toHaveBeenCalled();
    expect(component.lista).toEqual(mockAdresses);
  });

  it('should handle error on listAll method', () => {
    const errorMessage = 'Error fetching addresses';
    spyOn(window, 'alert'); // Mocking the window.alert method

    mockAdressService.listAll.and.returnValue(throwError({ message: errorMessage })); // Simulating an error using throwError

    component.listAll();

    expect(mockAdressService.listAll).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
  });

  // Add more tests for other methods in AdresslistComponent as needed
});
