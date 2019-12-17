import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import config from './config/config';

async function bootstrap() {
  const port = config.port || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  Logger.log(`Application started on port ${port}`);
}
bootstrap();
