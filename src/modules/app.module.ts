import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { MonkeysModule } from './monkeys/monkeys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { CorsMiddleware } from '@nest-middlewares/cors';
import { ServeStaticMiddleware } from '@nest-middlewares/serve-static';
import { MiddlewaresConsumer, RequestMethod } from '@nestjs/common';

@Module({
    modules: [
        UsersModule,
        CatsModule,
        DogsModule,
        MonkeysModule,
        TypeOrmModule.forRoot()
    ],
})
/*export class ApplicationModule {
    constructor(private readonly connection: Connection) {}
}*/

export class ApplicationModule {

    constructor(private readonly connection: Connection) {}

    configure(consumer: MiddlewaresConsumer) {

        const corsOptions = {
            //origin: 'http://localhost:4200',
            origin: '*',
            optionsSuccessStatus: 200,
        };

        CorsMiddleware.configure(corsOptions);
        ServeStaticMiddleware.configure('src/public');

        consumer.apply([CorsMiddleware, ServeStaticMiddleware]).forRoutes(
            { path: '*', method: RequestMethod.ALL },
        );
    }
}