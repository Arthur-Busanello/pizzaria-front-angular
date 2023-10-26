import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborItemComponent } from './sabor-item.component';

describe('SaborItemComponent', () => {
  let component: SaborItemComponent;
  let fixture: ComponentFixture<SaborItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborItemComponent]
    });
    fixture = TestBed.createComponent(SaborItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
