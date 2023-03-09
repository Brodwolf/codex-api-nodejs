import { Request, Response } from 'express'

export default async function getEndpointExample(request: Request, response: Response): Promise<Response | any> {

  // MEU BOM, AQUI TU FAZ O QUE TU QUISER NA TUA API GET
  console.log('oi')

  // MEU BOM, AQUI TU DIZ O QUE ELA VAI RETORNAR PARA QUEM CHAMA ELA
  return response.status(200).send({
    "message": "Deu certo! Informação retornada do backend!"
  })
}