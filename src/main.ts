import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const port = parseInt(configService.get('PORT'));
  app.enableCors();

  await app.listen(port || 3000);
}
bootstrap();
