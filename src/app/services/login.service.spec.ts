// login.service.spec.ts

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let service: LoginService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(LoginService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should log in', () => {
    // Arrange
    const mockLogin = { username: 'test', password: 'password' };
    const mockUser = { id: 1, username: 'test', role: 'admin', token: 'mockToken' };
  
    // Act
    service.logar(mockLogin).subscribe((user) => {
      // Assert
      expect(user).toEqual(mockUser);
    });
  
    // Assert
    const req = httpTestingController.expectOne('http://localhost:8081/api/login');
    expect(req.request.method).toBe('POST');
    req.flush(mockUser);
    httpTestingController.verify();
  });

  it('should log out', () => {
    // Arrange & Act
    service.deslogar().subscribe();

    // Assert
    const req = httpTestingController.expectOne('http://localhost:8081/api/login/deslogar');
    expect(req.request.method).toBe('GET');
    httpTestingController.verify();
  });
});
