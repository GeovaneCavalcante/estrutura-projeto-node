import { container } from 'tsyringe'
import type UserRepositoryInterface from '../../modules/users/repositories/UserRepositoryInterface'
import UserRepository from '../../modules/users/infra/repositories/inmen/UserRepository'

import type ProductRespositoryInterface from '../../modules/products/repositories/ProductRespositoryInterface'
import ProductRepository from '../../modules/products/infra/repositories/inmen/ProductRepository'

container.registerSingleton<UserRepositoryInterface>(
  'userRepository',
  UserRepository
)

container.registerSingleton<ProductRespositoryInterface>(
  'productRepository',
  ProductRepository
)
