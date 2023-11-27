import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoPedidoomponent } from './novo-pedido.component';

describe('NovoPedidoComponent', () => {
  let component: NovoPedidoomponent;
  let fixture: ComponentFixture<NovoPedidoomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoPedidoomponent]
    });
    fixture = TestBed.createComponent(NovoPedidoomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
