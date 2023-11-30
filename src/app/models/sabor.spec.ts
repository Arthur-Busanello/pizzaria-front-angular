import { Sabor } from './sabor';

describe('Sabor', () => {
  let sabor: Sabor;

  beforeEach(() => {
    sabor = new Sabor();
  });

  it('should create an instance', () => {
    expect(sabor).toBeTruthy();
  });

  it('should have default values', () => {
    expect(sabor.id).toBeUndefined();
    expect(sabor.nome).toBeUndefined();
    expect(sabor.preco_adicional).toBeUndefined();
    expect(sabor.descricao).toBeUndefined();
    expect(sabor.sabor).toBeUndefined();
  });

  it('should set values correctly', () => {
    sabor.id = 1;
    sabor.nome = 'Pepperoni';
    sabor.preco_adicional = 2.5;
    sabor.descricao = 'Spicy and delicious';
    sabor.sabor = { /* Your nested object properties here */ };

    expect(sabor.id).toEqual(1);
    expect(sabor.nome).toEqual('Pepperoni');
    expect(sabor.preco_adicional).toEqual(2.5);
    expect(sabor.descricao).toEqual('Spicy and delicious');
    expect(sabor.sabor).toEqual({ /* Your nested object properties here */ });
  });
});
