import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidoslistComponent } from './pedidoslist.component';
import { PedidosService } from 'src/app/services/pedidos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Import the HttpClientTestingModule

describe('PedidoslistComponent', () => {
  let component: PedidoslistComponent;
  let fixture: ComponentFixture<PedidoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidoslistComponent],
      providers: [PedidosService],  // Add the service to the providers
      imports: [HttpClientTestingModule],  // Add the HttpClientTestingModule to imports
    });

    fixture = TestBed.createComponent(PedidoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
