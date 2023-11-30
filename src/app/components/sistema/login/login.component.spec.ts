import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { of, throwError } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let mockLoginService: jasmine.SpyObj<LoginService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    mockLoginService = jasmine.createSpyObj('LoginService', ['logar', 'addToken', 'removerToken']);
    mockRouter = jasmine.createSpyObj('Router', ['navigate']); // Use jasmine.createSpyObj to create a spy object

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [
        { provide: LoginService, useValue: mockLoginService },
        { provide: Router, useValue: mockRouter },
      ],
    });

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log in successfully', () => {
    // Arrange
    const mockUser = { id: 1, username: 'test', role: 'admin', token: 'mockToken' };
    mockLoginService.logar.and.returnValue(of(mockUser));
  
    // Act
    component.login.username = 'test';
    component.login.password = 'password';
    component.logar();
  
    // Assert
    expect(mockLoginService.logar).toHaveBeenCalledWith(component.login);
    expect(mockLoginService.addToken).toHaveBeenCalledWith(mockUser.token);
    expect(mockRouter.navigate).toHaveBeenCalledWith(['admin/produtos']);
  });

  it('should handle login error', () => {
    // Arrange
    const errorMessage = 'Login failed';
    mockLoginService.logar.and.returnValue(throwError(errorMessage));

    // Act
    component.logar();

    // Assert
    expect(mockLoginService.logar).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith(
      'Exemplo de tratamento de erro/exception! Observe o erro no console!'
    );
    expect(console.error).toHaveBeenCalledWith(errorMessage);
  });
});
