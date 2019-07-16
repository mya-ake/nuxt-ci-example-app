import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoggerService } from './logger.service';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  constructor(private readonly loggerService: LoggerService) {}

  use(req: Request, res: Response, next: Function) {
    const { method, originalUrl, body, query } = req;
    const bodyString = JSON.stringify(body, null, 2);
    const queryString = JSON.stringify(query, null, 2);
    this.loggerService.log(
      `${method} ${originalUrl}\nquery:\n${queryString}\nbody:\n${bodyString}`,
    );
    next();
  }
}
