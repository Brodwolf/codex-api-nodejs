import { Router } from 'express'

export const endpointYuri = Router()

// Controllers
import { getYuriController } from '../controller/endpoint_yuri_controller/endpoint_yuri_controller'

endpointYuri.get('/', getYuriController)