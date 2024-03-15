import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { AuthAxiosRepository } from '../../infrastructure/axios/auth-axios.repository';
import { tokenToAccessTokenRequestUseCase } from '../use-case/TokenToRequestUsecase';

@Injectable()
export class TokenMiddlewareService implements NestMiddleware {
  constructor(private readonly authAxiosRepository: AuthAxiosRepository) {}
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(403).json({ message: 'Token is required.' });
    }

    try {
      await this.authAxiosRepository.validToken(
        tokenToAccessTokenRequestUseCase(token.replace('Bearer ', '')),
      );
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }
  }
}
