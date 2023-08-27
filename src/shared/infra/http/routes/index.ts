import { Router } from 'express'

import userRouter from '../../../../modules/users/infra/http/routes/user.routes'

const routes = Router()

routes.get('/healthcheck', (req, res) => res.json({ available: true }))

routes.use('/users', userRouter)

export default routes
