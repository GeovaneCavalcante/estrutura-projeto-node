import { container } from 'tsyringe'
import { type Request, type Response } from 'express'
import UserService from '../../../services/UserService'

export default class UserController {
  public async list(
    request: Request,
    response: Response
  ): Promise<Response> {
    const userService = container.resolve(UserService)
    const users = await userService.findUsers()

    return response.json(users)
  }
}
