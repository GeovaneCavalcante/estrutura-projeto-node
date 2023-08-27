import { injectable } from 'tsyringe'

import type UserRepositoryInterface from 'modules/users/repositories/UserRepositoryInterface'
import type User from 'modules/users/entities/User'

const users: User[] = [
  { name: 'Geovane', age: '25' },
  { name: 'Vinicius', age: '24' },
  { name: 'Hugo', age: '25' }
]
@injectable()
class UserRepository implements UserRepositoryInterface {
  constructor() {
  }

  async findAll(): Promise<User[]> {
    return users
  }
}

export default UserRepository
