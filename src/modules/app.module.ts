import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {CatsModule} from './cats/cats.module';
import {DogsModule} from './dogs/dogs.module';
import {MonkeysModule} from './monkeys/monkeys.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {CorsMiddleware} from '@nest-middlewares/cors';
import {MiddlewareConsumer} from '@nestjs/common';
import {CatsController} from "./cats/cats.controller";
import {DogsController} from "./dogs/dogs.controller";
import {UsersController} from "./users/users.controller";
import {MonkeysController} from "./monkeys/monkeys.controller";

@Module({
    modules: [
        UsersModule,
        CatsModule,
        DogsModule,
        MonkeysModule,
        TypeOrmModule.forRoot()
    ],
})

export class ApplicationModule {

    constructor(private readonly connection: Connection) {
    }

    configure(consumer: MiddlewareConsumer) {
        const corsOptions = {
            //origin: 'http://localhost:4200',
            origin: '*',
            optionsSuccessStatus: 200,
        };

        CorsMiddleware.configure(corsOptions);

        consumer.apply([CorsMiddleware])
            .forRoutes(
                CatsController,
                DogsController,
                MonkeysController,
                UsersController
            );
    }
}