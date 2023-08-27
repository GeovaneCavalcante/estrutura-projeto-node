import type User from '../entities/User'

export default interface UserRepositoryInterface {
  findAll: () => Promise<User[]>
}
