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
            jest.spyOn(monkeysService, 'findAll').mockImplementation(() => Observable.of(itemList));

            monkeysController.findAll().then((res) => {
                res.map(x => expect(x.name).not.toBeNull());
            });
        });
    });

    describe('create', () => {
        it('should return a monkey', async () => {
            jest.spyOn(monkeysService, 'add').mockImplementation(() => {
                return new Promise((resolve, reject) => {
                    resolve(newItem);
                })
            });

            const data = await monkeysController.create(newItem);
            expect(data.name).toBe(newItem.name);
        });
    });
});
