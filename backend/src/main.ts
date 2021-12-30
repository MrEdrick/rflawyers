import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: true,
    allowedHeaders: 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe',
    methods: "GET, PUT, POST, DELETE, UPDATE, OPTIONS",
    credentials: true
  });

  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
}
bootstrap();
