import {Module} from '@nestjs/common';
import {UsersModule} from './users/users.module';
import {AnimalsModule} from './animals/animals.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Connection} from 'typeorm';
import {CorsMiddleware} from '@nest-middlewares/cors';
import {MiddlewareConsumer} from '@nestjs/common';
import {CatsController} from "./animals/cats/cats.controller";
import {DogsController} from "./animals/dogs/dogs.controller";
import {UsersController} from "./users/users.controller";
import {MonkeysController} from "./animals/monkeys/monkeys.controller";

@Module({
    modules: [
        UsersModule,
        AnimalsModule,
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