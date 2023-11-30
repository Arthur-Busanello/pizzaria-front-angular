import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ClientdetailsComponent } from './clientdetails.component';
import { ClientService } from 'src/app/services/client.service';
import { of } from 'rxjs';
import { Client } from 'src/app/models/client';
import { Adress } from 'src/app/models/adress';

describe('ClientdetailsComponent', () => {
  let component: ClientdetailsComponent;
  let fixture: ComponentFixture<ClientdetailsComponent>;
  let mockClientService: jasmine.SpyObj<ClientService>;
  let mockNgbModal: jasmine.SpyObj<NgbModal>;

  beforeEach(waitForAsync(() => {
    mockClientService = jasmine.createSpyObj('ClientService', ['save', 'edit', 'delete']); // Added 'delete'
    mockNgbModal = jasmine.createSpyObj('NgbModal', ['open']);

    TestBed.configureTestingModule({
      declarations: [ClientdetailsComponent],
      imports: [FormsModule],
      providers: [
        { provide: ClientService, useValue: mockClientService },
        { provide: NgbModal, useValue: mockNgbModal },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientdetailsComponent);
    component = fixture.componentInstance;
    component.client_id = 1;
    component.client = new Client();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call update method and emit retorno event', () => {
    const mockClient: Client = {
      id: 1,
      nome: 'John Doe',
      phone: '123456789',
      cpf: '12345678901',
      adress: [new Adress()],
      client: []
    };

    spyOn(component.retorno, 'emit');

    mockClientService.edit.and.returnValue(of(mockClient));

    component.update(mockClient);

    expect(mockClientService.edit).toHaveBeenCalledWith(component.client, 1);
    expect(component.retorno.emit).toHaveBeenCalledWith(mockClient);
  });

 

  

});

// Note: No changes were made to the ClientdetailsComponent class.
