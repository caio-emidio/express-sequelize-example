import { Router } from 'express'
import authRouter from './auth.router'
import companyRouter from './company.router'
import employeeRouter from './employee.router'

const internalRouter = Router()
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Backend API",
        version: "0.1.0",
        description:
          "This is a backend API for a company test. Fell free to use it for your own purposes.",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Caio Emidio de Andrade Carnelos",
          url: "https://em1.tech",
          email: "caio.emidio@gmail.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8000",
        },
      ],
    },
    apis: ["./books.yaml"],
  };
  
  const specs = swaggerJsdoc(options);
  internalRouter.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

internalRouter.use('/employee', employeeRouter)
internalRouter.use('/company', companyRouter)
internalRouter.use('/auth', authRouter)

export default internalRouter