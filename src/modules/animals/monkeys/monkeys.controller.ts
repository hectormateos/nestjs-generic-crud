import {Body, Controller, Get, Post} from '@nestjs/common';
import {MonkeysService} from './monkeys.service';
import {ApiUseTags} from "@nestjs/swagger";

@ApiUseTags('monkeys')
@Controller('monkeys')
export class MonkeysController {

    monkeys: any;

    constructor(private readonly monkeysService: MonkeysService) {
    }

    @Get()
    async findAll(): Promise<any> {
        return this.monkeysService.findAll();
    }

    @Post()
    async create(@Body() monkey) {
        return this.monkeysService.add(monkey);
    }
}