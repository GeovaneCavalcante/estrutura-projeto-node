import 'reflect-metadata'
import express, { type Response, type Request, type NextFunction } from 'express'
import dotenv from 'dotenv'

import 'express-async-errors'
import AppError from '../../errors/AppError'

import routes from './routes'

import '../../container'

dotenv.config()
const app = express()

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    console.log(err)
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message
    })
  }
  console.log(err)
  return response.status(500).json({
    status: 'error',
    message: 'Integral server error'
  })
})

app.listen(8080, () => {
  console.log('Server started on port 8080!')
})
