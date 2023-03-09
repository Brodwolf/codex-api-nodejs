import { Request, Response } from 'express'

export default async function getEndpointExampleWithParam(request: Request, response: Response): Promise<Response | any> {

  // Recupera da request o parametro a partir do nome cadastrado no arquivo de routes ex: /getEndpointExample/:param, buscamos dentro da request o param
  const { param } = request.params

  return response.status(200).send({
    "message": "O valor enviado via parametro foi: " + param
  })
}