import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    cookieSession({
      keys: ['qwert123'],
    }),
  );
  app.useGlobalPipes(
    new ValidationPipe({
      // it's impossible to add new columns in request
      whitelist: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
