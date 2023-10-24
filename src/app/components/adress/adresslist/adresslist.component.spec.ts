import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresslistComponent } from './adresslist.component';

describe('AdresslistComponent', () => {
  let component: AdresslistComponent;
  let fixture: ComponentFixture<AdresslistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdresslistComponent]
    });
    fixture = TestBed.createComponent(AdresslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
