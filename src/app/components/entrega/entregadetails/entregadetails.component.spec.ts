import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregadetailsComponent } from './entregadetails.component';

describe('EntregadetailsComponent', () => {
  let component: EntregadetailsComponent;
  let fixture: ComponentFixture<EntregadetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregadetailsComponent]
    });
    fixture = TestBed.createComponent(EntregadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
