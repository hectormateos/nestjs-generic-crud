import {Controller, Get, Post, Body, Response} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {ApiUseTags} from "@nestjs/swagger";

@ApiUseTags('dogs')
@Controller('dogs')
export class DogsController {
    dogs: any[];

    constructor() {
        this.dogs = [
            {name: 'Affenpinscher'},
            {name: 'Airedale terrier'},
            {name: 'Akita'},
            {name: 'Akita americano'},
            {name: 'Alaskan Husky'},
            {name: 'Alaskan malamute'},
            {name: 'American Foxhound'},
            {name: 'American pit bull terrier'},
            {name: 'American staffordshire terrier'},
            {name: 'Ariegeois'},
            {name: 'Artois'},
            {name: 'Australian silky terrier'},
            {name: 'Australian Terrier'},
            {name: 'Austrian Black & Tan Hound'},
            {name: 'Azawakh'}
        ];
    }

    @Get()
    findAll(): Observable<any> {
        return Observable.of(this.dogs);
    }

    @Post()
    create(@Body() dog) {
        this.dogs.push(dog);
        return dog;
    }
}