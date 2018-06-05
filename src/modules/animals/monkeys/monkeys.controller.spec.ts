import {Test} from '@nestjs/testing';
import {MonkeysController} from './monkeys.controller';
import {MonkeysService} from './monkeys.service';
import {Observable} from 'rxjs/Observable';

describe('MonkeysController', () => {
    let monkeysController: MonkeysController;
    let monkeysService: MonkeysService;

    const itemList = [
        {name: 'x'},
        {name: 'y'}
    ];

    const newItem = {name: 'x'};

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [MonkeysController],
            providers: [MonkeysService]
        }).compile();

        monkeysService = module.get<MonkeysService>(MonkeysService);
        monkeysController = module.get<MonkeysController>(MonkeysController);
    });

    describe('findAll', () => {
        it('should return an array of monkeys', async () => {

            //jest.spyOn(monkeysService, 'findAll').mockImplementation(() => Observable.of(itemList));

            //expect(typeof await monkeysController.findAll()).toBe(typeof itemList);
            const res = await monkeysController.findAll();
            console.log(res)
            /*res.map(x => expect(x.name).not.toBeNull());

            monkeysController.findAll().subscribe((res) => {
                res.map(x => expect(x.name).not.toBeNull());
            });*/
        });
    });

    /*describe('create', () => {
        it('should return a monkey', async () => {
            jest.spyOn(monkeysService, 'findAll').mockImplementation(() => Observable.of(newItem));

            const initialCount = (await monkeysController.findAll()).length;
            const createResult = await monkeysController.create(newItem);

            expect(typeof createResult).toBe(typeof newItem);
            expect(createResult.name).not.toBeNull();

            const finalCount = (await monkeysController.findAll()).length;
            expect(finalCount > initialCount).toBeTruthy();
        });
    });*/
});
