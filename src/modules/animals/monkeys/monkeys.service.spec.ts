import {Test} from '@nestjs/testing';
import {MonkeysService} from './monkeys.service';

describe('MonkeysService', () => {
    let monkeysService: MonkeysService;

    const itemList = [
        {name: 'x'},
        {name: 'y'}
    ];

    const newItem = {name: 'x'};

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            providers: [MonkeysService]
        }).compile();

        monkeysService = module.get<MonkeysService>(MonkeysService);
    });

    describe('findAll', () => {
        it('should return an array of monkeys', async () => {
            monkeysService.findAll().subscribe((res) => {
                res.map(x => expect(x.name).not.toBeNull());
            });
        });
    });

    describe('add', () => {
        it('should return a monkey', async () => {
            const data = await monkeysService.add(newItem);
            expect(data.name).toBe(newItem.name);
        });
    });
});