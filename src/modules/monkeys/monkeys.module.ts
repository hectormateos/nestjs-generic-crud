import { Module } from '@nestjs/common';
import { MonkeysController } from './monkeys.controller';
import { MonkeysService } from "./monkeys.service";

@Module({
    controllers: [MonkeysController],
    providers: [MonkeysService],
})
export class MonkeysModule {}
