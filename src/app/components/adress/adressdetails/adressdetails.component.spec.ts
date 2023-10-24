import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdressdetailsComponent } from './adressdetails.component';

describe('AdressdetailsComponent', () => {
  let component: AdressdetailsComponent;
  let fixture: ComponentFixture<AdressdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdressdetailsComponent]
    });
    fixture = TestBed.createComponent(AdressdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
