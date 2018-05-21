import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { MonkeysModule } from './monkeys/monkeys.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

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
    constructor(private readonly connection: Connection) {}
}