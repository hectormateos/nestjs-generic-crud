import {Test} from '@nestjs/testing';
import {CatsController} from './cats.controller';

describe('CatsController', () => {
    let catsController: CatsController;

    const itemList = [
        {name: 'x'},
        {name: 'y'}
    ];

    const newItem = {name: 'x'};

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [CatsController]
        }).compile();

        catsController = module.get<CatsController>(CatsController);
    });

    describe('findAll', () => {
        it('should return an array of cats', async () => {
            expect(typeof catsController.findAll()).toBe(typeof itemList);
            catsController.findAll().map(x => expect(x.name).not.toBeNull());
        });
    });

    describe('create', () => {
        it('should return a cat', async () => {
            const initialCount = (catsController.findAll()).length;
            const createResult = catsController.create(newItem);
            expect(typeof createResult).toBe(typeof newItem);
            expect(createResult.name).not.toBeNull();
            const finalCount = (catsController.findAll()).length;
            expect(finalCount > initialCount).toBeTruthy();
        });
    });
});