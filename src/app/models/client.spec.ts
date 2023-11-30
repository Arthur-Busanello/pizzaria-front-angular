import { Client } from './client';
import { Adress } from './adress';

describe('Client', () => {
  it('should create an instance', () => {
    const client = new Client();
    expect(client).toBeTruthy();
  });

  it('should have properties set correctly', () => {
    const client = new Client();
    client.id = 1;
    client.nome = 'John Doe';
    client.phone = '123456789';
    client.cpf = '12345678901';
    client.client = [
      // Add nested clients as needed
    ];
    client.adress = [
      { id: 1, cidade: 'City1', rua: 'Street1', numero_rua: 123, client: [], adress: [] } as Adress,
      // Add more addresses as needed
    ];

    expect(client.id).toBe(1);
    expect(client.nome).toBe('John Doe');
    expect(client.phone).toBe('123456789');
    expect(client.cpf).toBe('12345678901');
    expect(client.client.length).toBe(0); // Assuming no nested clients
    expect(client.adress.length).toBe(1); // Assuming you added one address
  });
});
