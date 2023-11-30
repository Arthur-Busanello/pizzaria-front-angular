import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbModalRef, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Sabor } from 'src/app/models/sabor';
import { SaborService } from 'src/app/services/sabor.service';
import { SabordetailsComponent } from './sabordetails.component';

describe('SabordetailsComponent', () => {
  let component: SabordetailsComponent;
  let fixture: ComponentFixture<SabordetailsComponent>;
  let mockSaborService: jasmine.SpyObj<SaborService>;
  let mockModalService: jasmine.SpyObj<NgbModal>;

  beforeEach(() => {
    mockSaborService = jasmine.createSpyObj('SaborService', ['save']);
    mockModalService = jasmine.createSpyObj('NgbModal', ['open']);

    TestBed.configureTestingModule({
      declarations: [SabordetailsComponent],
      imports: [FormsModule, NgbModule, HttpClientTestingModule], // Add HttpClientTestingModule here
      providers: [
        { provide: SaborService, useValue: mockSaborService },
        { provide: NgbModal, useValue: mockModalService },
      ],
    });
    fixture = TestBed.createComponent(SabordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call lancar method and open modal', () => {
    const mockModalRef: NgbModalRef = {
      componentInstance: component,
      close: jasmine.createSpy('close'),
      dismiss: jasmine.createSpy('dismiss'),
    } as unknown as NgbModalRef;
  
    const mockNgbModal = { open: jasmine.createSpy('open').and.returnValue(mockModalRef) };
  
    component.lancar({});
  
    expect(mockNgbModal.open).toHaveBeenCalledOnceWith({}, { size: 'lg' });
  });
});
