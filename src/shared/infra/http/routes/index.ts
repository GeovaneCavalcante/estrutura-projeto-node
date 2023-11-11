import { Router } from 'express'

import userRouter from '../../../../modules/users/infra/http/routes/user.routes'

import productRouter from '../../../../modules/products/infra/http/routes/product.routes'

const routes = Router()

routes.get('/healthcheck', (req, res) => res.json({ available: true }))

routes.use('/users', userRouter)

routes.use('/products', productRouter)

export default routes
