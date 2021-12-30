"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config = require("config");
async function bootstrap() {
    const serverConfig = config.get('server');
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.setGlobalPrefix('api');
    app.enableCors({
        origin: '/^(https:\/\/([^\.]*\.)?rodriguesfranceschini\.com)$/i',
    });
    const port = process.env.PORT || serverConfig.port;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map