import { inject, injectable } from 'tsyringe'
import Product from '../entities/Product'
import ProductRespositoryInterface from '../repositories/ProductRespositoryInterface'

export interface ProductDTO {
  name?: string
  description?: string
  price?: number
  stock?: number
}

@injectable()
export default class ProductService {
  constructor(
    @inject('productRepository')
    private readonly productRespository: ProductRespositoryInterface
  ) { }

  public async create(productDTO: ProductDTO): Promise<Product> {
    const productData = new Product(
      productDTO.name,
      productDTO.description,
      productDTO.price,
      productDTO.stock
    )

    const product = await this.productRespository.create(productData)

    return product
  }

  public async list(): Promise<Product[]> {
    const products = await this.productRespository.list()

    return products
  }
}
