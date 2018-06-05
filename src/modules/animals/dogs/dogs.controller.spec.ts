import {Test} from '@nestjs/testing';
import {DogsController} from './dogs.controller';
import {Observable} from 'rxjs/Observable';

describe('DogsController', () => {
    let dogsController: DogsController;

    const itemList = [
        {name: 'x'},
        {name: 'y'}
    ];

    const newItem = {name: 'x'};

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [DogsController]
        }).compile();

        dogsController = module.get<DogsController>(DogsController);
    });

    describe('findAll', () => {
        it('should return an observable with an array of dogs', async () => {
            dogsController.findAll().subscribe((res) => {
                res.map(x => expect(x.name).not.toBeNull());
            });
        });
    });

    describe('create', () => {
        it('should return a dog', async () => {
            dogsController.findAll().subscribe((res) => {
                const initialCount = res.length;
                const createResult = dogsController.create(newItem);
                expect(typeof createResult).toBe(typeof newItem);
                expect(createResult.name).not.toBeNull();

                dogsController.findAll().subscribe((res) => {
                    const finalCount = res.length;
                    expect(finalCount > initialCount).toBeTruthy();
                });
            });
        });
    });
});