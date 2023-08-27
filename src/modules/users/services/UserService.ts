import { inject, injectable } from 'tsyringe'
import ReserveRepositoryInterface from '../repositories/UserRepositoryInterface'
import type User from '../entities/User'

@injectable()
export default class UserService {
  constructor(
    @inject('userRepository')
    private readonly userRepository: ReserveRepositoryInterface
  ) {
  }

  async findUsers(): Promise<User[]> {
    const users = await this.userRepository.findAll()
    return users
  }
}
