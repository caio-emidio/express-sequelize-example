import { Router } from 'express'
import companyRouter from './companyRouter'

const internalRouter = Router()

internalRouter.use('/company', companyRouter)

export default internalRouter