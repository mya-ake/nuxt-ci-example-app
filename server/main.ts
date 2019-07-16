import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from './logger/logger.service';
import helmet from 'helmet';
import consola from 'consola';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.SERVER_PORT || 3000;
const CORS_ORIGIN = process.env.CLIENT_ORIGIN || '*';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: { origin: CORS_ORIGIN },
    logger: new LoggerService(),
  });
  app.use(helmet());
  await app.listen(PORT);
  consola.success(`Server started: http://localhost:${PORT}`);
}
bootstrap();
