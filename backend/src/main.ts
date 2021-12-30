import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  var whitelist = [serverConfig.origin, serverConfig.domain, serverConfig.domain_www];
  app.enableCors({
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
  });
  
  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
}
bootstrap();
