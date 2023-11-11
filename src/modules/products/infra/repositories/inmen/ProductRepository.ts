import type Product from 'modules/products/entities/Product'
import type ProductRespositoryInterface from 'modules/products/repositories/ProductRespositoryInterface'

const PRODUCTS: Product[] = []

export default class ProductRepository implements ProductRespositoryInterface {
  async create(product: Product): Promise<Product> {
    PRODUCTS.push(product)
    return product
  }

  async list(): Promise<Product[]> {
    return PRODUCTS
  }
}
