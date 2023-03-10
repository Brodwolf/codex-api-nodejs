import express, { Express } from 'express'

import { authMiddleware } from './middleware/auth'

// Importar as rotas criadas para o seus endpoints
import { endpointExampleRouter } from './routes/endpoint_example_router'
import { endpointYuri } from './routes/endpoint_yuri'

const app: Express = express()
const port = 8083

// Adiciona a rota ao servidor express
app.use('/getEndpointExample', [authMiddleware], endpointExampleRouter)
app.use('/yuri', [authMiddleware], endpointYuri)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})