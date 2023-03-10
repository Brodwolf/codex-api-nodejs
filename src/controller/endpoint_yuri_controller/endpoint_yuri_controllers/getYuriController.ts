import { setDefaultResultOrder } from 'dns'
import { Request, Response } from 'express'
import { getPackedSettings } from 'http2'

export default async function getYuriController(request: Request, response: Response): Promise<Response | any> {

  
  return response.status(200).send({
    "message": "Esse é um exemplo de response de um backend em node!"
  })
}