import { Product, PRODUCTS } from './data';

describe('Product Interface and PRODUCTS Array', () => {
  it('PRODUCTS array defined hona chahiye', () => {
    expect(PRODUCTS).toBeTruthy();
    expect(Array.isArray(PRODUCTS)).toBeTrue();
  });

  it('Har product ki sari properties defined honi chahiye', () => {
    PRODUCTS.forEach((product: Product) => {
      expect(product.id).toBeDefined();
      expect(product.name).toBeDefined();
      expect(product.category).toBeDefined();
      expect(product.price).toBeDefined();
      expect(typeof product.id).toBe('number');
      expect(typeof product.name).toBe('string');
      expect(typeof product.category).toBe('string');
      expect(typeof product.price).toBe('number');
    });
  });

  it('Kuch products Fruits category ke hone chahiye', () => {
    const fruits = PRODUCTS.filter(product => product.category === 'Fruits');
    expect(fruits.length).toBeGreaterThan(0);
  });
});