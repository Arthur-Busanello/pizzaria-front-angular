import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregalistComponent } from './entregalist.component';

describe('EntregalistComponent', () => {
  let component: EntregalistComponent;
  let fixture: ComponentFixture<EntregalistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntregalistComponent]
    });
    fixture = TestBed.createComponent(EntregalistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
