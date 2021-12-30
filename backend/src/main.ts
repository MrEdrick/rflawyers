import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: '/^(https:\/\/([^\.]*\.)?rodriguesfranceschini\.com)$/i',
  });

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
}
bootstrap();
