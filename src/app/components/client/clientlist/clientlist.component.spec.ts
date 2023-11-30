import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientlistComponent } from './clientlist.component';
import { ClientService } from 'src/app/services/client.service';
import { of, throwError } from 'rxjs';
import { Client } from 'src/app/models/client';
import { fakeAsync, tick } from '@angular/core/testing';
const errorMessage = 'Error fetching clients';
describe('ClientlistComponent', () => {
  let component: ClientlistComponent;
  let fixture: ComponentFixture<ClientlistComponent>;
  let mockClientService: jasmine.SpyObj<ClientService>;
  let mockNgbModal: jasmine.SpyObj<NgbModal>;

  beforeEach(waitForAsync(() => {
    mockClientService = jasmine.createSpyObj('ClientService', ['listAll', 'exemploErro']);
    mockNgbModal = jasmine.createSpyObj('NgbModal', ['open', 'dismissAll']); // Add 'dismissAll' here

    TestBed.configureTestingModule({
      declarations: [ClientlistComponent],
      providers: [
        { provide: ClientService, useValue: mockClientService },
        { provide: NgbModal, useValue: mockNgbModal },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll method on initialization', () => {
    const mockClients: Client[] = [
      { id: 1, nome: 'John Doe', phone: '123456789', cpf: '12345678901', adress: [], client: [] },
      { id: 2, nome: 'Jane Doe', phone: '987654321', cpf: '09876543210', adress: [], client: [] },
    ];
  
    mockClientService.listAll.and.returnValue(of(mockClients));
  
    fixture.detectChanges();
  
    expect(mockClientService.listAll).toHaveBeenCalled();
    expect(component.lista).toEqual(mockClients);
  });

  it('should handle error on listAll method', () => {
    spyOn(window, 'alert'); // Mocking the window.alert method
  
    const errorMessage = 'Error fetching addresses'; // Move this line inside the test
    
    mockClientService.listAll.and.returnValue(throwError({ message: errorMessage })); // Simulating an error using throwError
    
    component.listAll();
    
    expect(mockClientService.listAll).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
  });

  it('should call exemploErro method', () => {
    mockClientService.exemploErro.and.returnValue(of([]));

    component.exemploErro();

    expect(mockClientService.exemploErro).toHaveBeenCalled();
    expect(component.lista).toEqual([]);
  });

  it('should handle error on exemploErro method', fakeAsync(() => {
    spyOn(window, 'alert');

    mockClientService.exemploErro.and.returnValue(throwError({ message: errorMessage }));

    component.exemploErro();

    tick(); // Wait for the asynchronous code to complete

    expect(mockClientService.exemploErro).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Exemplo de tratamento de erro/exception! Observe o erro no console!');
  }));
    

  it('should call adicionar method and open modal', () => {
    const mockModalRef: NgbModalRef = {
      componentInstance: component,
      close: jasmine.createSpy('close'),
      dismiss: jasmine.createSpy('dismiss'),
    } as unknown as NgbModalRef; // Type assertion

    const mockModal = {};
    mockNgbModal.open.and.returnValue(mockModalRef);

    component.adicionar(mockModal);

    expect(mockNgbModal.open).toHaveBeenCalledWith(mockModal, { size: 'md' });
  });

  it('should call editar method and open modal', () => {
    const mockModalRef: NgbModalRef = {
      componentInstance: component,
      close: jasmine.createSpy('close'),
      dismiss: jasmine.createSpy('dismiss'),
    } as unknown as NgbModalRef; // Type assertion

    const mockModal = {};
    mockNgbModal.open.and.returnValue(mockModalRef);

    const mockClient: Client = {
      id: 1, nome: 'John Doe', phone: '123456789', cpf: '12345678901', adress: [],
      client: []
    };
    component.editar(mockModal, mockClient, 0);

    expect(component.client_id).toBe(mockClient.id);
    expect(mockNgbModal.open).toHaveBeenCalledWith(mockModal, { size: 'md' });
  });

  it('should call addOuEditarClient method', () => {
    spyOn(component, 'listAll');
    spyOn(component.modalService, 'dismissAll'); // Fix the spy here

    const mockClient: Client = {
      id: 1, nome: 'John Doe', phone: '123456789', cpf: '12345678901', adress: [],
      client: []
    };
    component.addOuEditarClient(mockClient);

    expect(component.listAll).toHaveBeenCalled();
    expect(component.modalService.dismissAll).toHaveBeenCalled();
  });
});
