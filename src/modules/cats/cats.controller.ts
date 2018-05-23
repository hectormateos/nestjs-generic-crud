import { Controller, Get, Post, Body } from '@nestjs/common';
import {ApiUseTags} from "@nestjs/swagger";

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
  cats: string[];

  constructor() {
    this.cats = ['red cat', 'green cat', 'yellow cat'];
  }

  @Get()
  findAll() {
    return this.cats;
  }

  @Post()
  create(@Body() body) {
    const catName = body.name;
    this.cats.push(catName);
    return {name: catName};
  }
}