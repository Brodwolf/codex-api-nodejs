import { Request, Response, NextFunction } from 'express'

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  if (!req.headers?.authorization) {
      // res.status(401).send('Usuário não autenticado')
      next()
  } else {
      next()
  }
} 