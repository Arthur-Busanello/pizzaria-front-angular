import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { PedidosdetailsComponent } from './pedidosdetails.component';

describe('PedidosdetailsComponent', () => {
  let component: PedidosdetailsComponent;
  let fixture: ComponentFixture<PedidosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidosdetailsComponent],
      imports: [HttpClientTestingModule, FormsModule], // Add FormsModule to imports
    });
    fixture = TestBed.createComponent(PedidosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
