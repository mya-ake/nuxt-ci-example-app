import { LoggerService as NestLoggerService } from '@nestjs/common';
import consola from 'consola';

export class LoggerService implements NestLoggerService {
  log(message: string) {
    consola.info(message);
  }
  error(message: string, trace: string) {
    consola.error(message, trace);
  }
  warn(message: string) {
    consola.warn(message);
  }
  debug(message: string) {
    consola.debug(message);
  }
  verbose(messaeg: string) {
    consola.log(messaeg);
  }
}
