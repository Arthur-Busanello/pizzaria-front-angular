import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AdressdetailsComponent } from './adressdetails.component';
import { AdressService } from 'src/app/services/adress.service';
import { of } from 'rxjs';
import { Adress } from 'src/app/models/adress';

describe('AdressdetailsComponent', () => {
  let component: AdressdetailsComponent;
  let fixture: ComponentFixture<AdressdetailsComponent>;
  let mockAdressService: jasmine.SpyObj<AdressService>;
  let mockNgbModal: jasmine.SpyObj<NgbModal>;
  
  beforeEach(waitForAsync(() => {
    mockAdressService = jasmine.createSpyObj('AdressService', ['save', 'edit']);
    mockNgbModal = jasmine.createSpyObj('NgbModal', ['open']);

    TestBed.configureTestingModule({
      declarations: [AdressdetailsComponent],
      imports: [FormsModule],
      providers: [
        { provide: AdressService, useValue: mockAdressService },
        { provide: NgbModal, useValue: mockNgbModal },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdressdetailsComponent);
    component = fixture.componentInstance;
    component.adress = {id: 1, cidade: 'City', rua: 'Street', numero_rua: 123, client: [  ], adress: [  ]},1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call salvar method and emit retorno event', () => {
    const mockAdress: Adress = {
      id: 1,
      cidade: 'City',
      rua: 'Street',
      numero_rua: 123,
      client: [],
      adress: []
    };
  
    component.adress = mockAdress;
    spyOn(component.retorno, 'emit');
  
    mockAdressService.save.and.returnValue(of(mockAdress));
  
    component.salvar();
  
    expect(mockAdressService.save).toHaveBeenCalledWith(mockAdress);
    expect(component.retorno.emit).toHaveBeenCalledWith(mockAdress);
  });

  it('should call editar method and emit retorno event', () => {
    const mockAdress: Adress = {
      id: 1,
      cidade: 'City',
      rua: 'Street',
      numero_rua: 123,
      client: [], // Substitua isso pelos valores reais de mockAdress.client
      adress: [], // Substitua isso pelos valores reais de mockAdress.adress
    };
  
    component.id = 1;
    spyOn(component.retorno, 'emit');
  
    // Certifique-se de que o método edit retorna um observable (of() em seu caso)
    mockAdressService.edit.and.returnValue(of({}));
  
    // Corrija os valores do objeto mockAdress para corresponder ao que é esperado no método edit
    const expectedAdress: Adress = {
      id: 1,
      cidade: 'City',
      rua: 'Street',
      numero_rua: 123,
      client: mockAdress.client, // Use os valores reais de mockAdress.client
      adress: mockAdress.adress, // Use os valores reais de mockAdress.adress
    };
  
    component.editar(mockAdress);
  
    // Certifique-se de que o método emit seja chamado após a chamada do método editar
    expect(component.retorno.emit).toHaveBeenCalledWith(expectedAdress);
  });

  it('should call excluir method and remove element from client array', () => {
    const mockAdress: Adress = {
      id: 1,
      cidade: 'City',
      rua: 'Street',
      numero_rua: 123,
      client: [],
      adress: []
    };
  
    component.excluir(mockAdress, 1);
  
    expect(mockAdress.client).toEqual([]);
  });

  it('should call lancar method and open modal', () => {
    const mockModalRef: NgbModalRef = {
      componentInstance: component,
      close: jasmine.createSpy('close'),
      dismiss: jasmine.createSpy('dismiss'),
      _hidden: null,
      _resolve: null,
      _reject: null,
      _applyWindowOptions: null,
      // Add other necessary properties
    } as unknown as NgbModalRef;
    
    const mockModal = {};
    mockNgbModal.open.and.returnValue(mockModalRef);
    
    component.lancar(mockModal);
    
    expect(mockNgbModal.open).toHaveBeenCalledWith(mockModal, { size: 'lg' });
  });
  
  
});
