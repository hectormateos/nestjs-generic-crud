import {Controller, Get, Post, Body} from '@nestjs/common';
import {ApiUseTags} from "@nestjs/swagger";

@ApiUseTags('cats')
@Controller('cats')
export class CatsController {
    cats: any[];

    constructor() {
        this.cats = [
            {name: 'Abisinio'},
            {name: 'American Curl'},
            {name: 'Azul ruso'},
            {name: 'American shorthair'},
            {name: 'American wirehair'},
            {name: 'Angora turco'},
            {name: 'Africano doméstico'}
        ];
    }

    @Get()
    findAll() {
        return this.cats;
    }

    @Post()
    create(@Body() cat) {
        this.cats.push(cat);
        return cat;
    }
}