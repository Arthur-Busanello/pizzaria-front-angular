import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoslistComponent } from './produtoslist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProdutoslistComponent', () => {
  let component: ProdutoslistComponent;
  let fixture: ComponentFixture<ProdutoslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoslistComponent],
      imports: [HttpClientTestingModule], 
    });
    fixture = TestBed.createComponent(ProdutoslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
