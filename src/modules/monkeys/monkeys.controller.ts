import { Controller, Get } from '@nestjs/common';
import { MonkeysService } from './monkeys.service';
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
}