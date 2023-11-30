import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { AdresslistComponent } from './adresslist.component';
import { AdressService } from 'src/app/services/adress.service';
import { of, throwError } from 'rxjs';
import { Adress } from 'src/app/models/adress';

describe('AdresslistComponent', () => {
  let component: AdresslistComponent;
  let fixture: ComponentFixture<AdresslistComponent>;
  let mockAdressService: jasmine.SpyObj<AdressService>;

  beforeEach(() => {
    mockAdressService = jasmine.createSpyObj<AdressService>('AdressService', ['listAll']);

    TestBed.configureTestingModule({
      declarations: [AdresslistComponent],
      providers: [
        { provide: AdressService, useValue: mockAdressService }
      ],
    });

    fixture = TestBed.createComponent(AdresslistComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call listAll method and populate lista on success', fakeAsync(() => {
    const mockAdresses: Adress[] = [
      { id: 1, cidade: 'City1', rua: 'Street1', numero_rua: 123, client: [], adress: [] },
      { id: 2, cidade: 'City2', rua: 'Street2', numero_rua: 456, client: [], adress: [] },
    ];

    component.lista = [];
    mockAdressService.listAll.and.returnValue(of(mockAdresses));

    component.listAll();
    tick();

    expect(mockAdressService.listAll).toHaveBeenCalled();
    expect(component.lista).toEqual(mockAdresses);
  }));

  it('should handle error on listAll method', fakeAsync(() => {
    const errorMessage = 'Error fetching addresses';
    spyOn(window, 'alert');
    mockAdressService.listAll.and.returnValue(throwError({ message: errorMessage }));

    component.listAll();
    tick();

    expect(mockAdressService.listAll).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(errorMessage);
  }));
});
