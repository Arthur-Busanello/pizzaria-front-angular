import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborAddComponent } from './sabor-add.component';

describe('SaborAddComponent', () => {
  let component: SaborAddComponent;
  let fixture: ComponentFixture<SaborAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborAddComponent]
    });
    fixture = TestBed.createComponent(SaborAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
