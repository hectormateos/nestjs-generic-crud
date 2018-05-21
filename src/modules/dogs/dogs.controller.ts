import { Controller, Get, Post, Body, Response } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Controller('dogs')
export class DogsController {

  constructor() {
  }

  @Get()
  findAll(): Observable<any> {
    return Observable.of([
      'dog-1',
      'dog-2',
    ]);
  }
}