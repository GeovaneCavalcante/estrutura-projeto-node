import { type Request, type Response } from 'express'
import { container } from 'tsyringe'

import ProductService, { type ProductDTO } from '../../../services/ProductService'

export default class ProductController {
  constructor() { }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, description, stock, price }: ProductDTO = req.body

    const productService = container.resolve(ProductService)

    const product = await productService.create({
      name, description, stock, price
    })

    return res.json(product)
  }

  async list(req: Request, res: Response): Promise<Response> {
    const productService = container.resolve(ProductService)

    const products = await productService.list()

    return res.json(products)
  }
}
