import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import HttpClientTestingModule
import { SaborlistComponent } from './saborlist.component';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent],
      imports: [HttpClientTestingModule], // Add HttpClientTestingModule to the imports array
    });
    fixture = TestBed.createComponent(SaborlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
