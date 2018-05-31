import { Module } from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { DogsController } from './dogs/dogs.controller';
import { MonkeysController } from './monkeys/monkeys.controller';
import { MonkeysService} from "./monkeys/monkeys.service";

@Module({
    controllers: [
        CatsController,
        DogsController,
        MonkeysController
    ],
    providers: [
        MonkeysService
    ]
})
export class AnimalsModule {}