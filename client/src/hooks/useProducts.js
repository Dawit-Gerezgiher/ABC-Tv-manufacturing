import { products as allProducts } from '../data/products';

export function useProducts() {
  return { products: allProducts };
}