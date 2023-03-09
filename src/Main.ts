import express, { Express } from 'express'

import { authMiddleware } from './middleware/auth'

// Importar as rotas criadas para o seus endpoints
import { endpointExampleRouter } from './routes/endpoint_example_router'

const app: Express = express()
const port = 8083

// Adiciona a rota ao servidor express
app.use('/getEndpointExample', [authMiddleware], endpointExampleRouter)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})