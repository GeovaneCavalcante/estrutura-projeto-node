import type Product from '../entities/Product'

export default interface ProductRespositoryInterface {
  create: (product: Product) => Promise<Product>
  list: () => Promise<Product[]>
}
