import { Adress } from './adress';
import { Client } from './client';

describe('Adress', () => {
  it('should create an instance', () => {
    const adress = new Adress();
    expect(adress).toBeTruthy();
  });

  it('should have properties set correctly', () => {
    const adress = new Adress();
    adress.id = 1;
    adress.cidade = 'City1';
    adress.rua = 'Street1';
    adress.numero_rua = 123;
    adress.client = [
      { id: 1, nome: 'John Doe', phone: '123456789', cpf: '12345678901', adress: [], client: [] } as Client,
      // Add more clients as needed
    ];
    adress.adress = [
      // Add nested addresses as needed
    ];

    expect(adress.id).toBe(1);
    expect(adress.cidade).toBe('City1');
    expect(adress.rua).toBe('Street1');
    expect(adress.numero_rua).toBe(123);
    expect(adress.client.length).toBe(1); // Assuming you added one client
    expect(adress.adress.length).toBe(0); // Assuming no nested addresses
  });
});
