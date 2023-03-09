import { Router } from 'express'
export const endpointExampleRouter = Router()

//Aqui voce importa os controllers do seu endpoint
import { getEndpointExample, getEndpointExampleWithParam } from '../controller/endpoint_example_controller/endpoint_example_controller'

// Aqui você mapeia as rotas desse endpoint
endpointExampleRouter.get('/', getEndpointExample)
endpointExampleRouter.get('/:param/', getEndpointExampleWithParam)