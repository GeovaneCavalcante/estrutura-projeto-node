import { container } from 'tsyringe'
import type UserRepositoryInterface from '../../modules/users/repositories/UserRepositoryInterface'
import UserRepository from '../../modules/users/infra/repositories/inmen/UserRepository'

container.registerSingleton<UserRepositoryInterface>(
  'userRepository',
  UserRepository
)
