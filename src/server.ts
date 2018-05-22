import {NestFactory} from '@nestjs/core';
import {ApplicationModule} from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import { join } from 'path';

async function bootstrap() {
    const app = await NestFactory.create(ApplicationModule);

    app.useStaticAssets(__dirname + '/public');

    const options = new DocumentBuilder()
        .setTitle('Generic Api')
        .setDescription('API')
        .setVersion('1.0')
        .addTag('generic-api')
        .build();

    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('/api', app, document);

    app.use(bodyParser.json());
    await app.listen(3000);
}

bootstrap();
