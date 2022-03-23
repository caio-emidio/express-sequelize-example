import { Router } from 'express'
import authRouter from './auth.router'
import companyRouter from './company.router'
import employeeRouter from './employee.router'

const internalRouter = Router()

internalRouter.use('/employee', employeeRouter)
internalRouter.use('/company', companyRouter)
internalRouter.use('/auth', authRouter)

export default internalRouter