import {Injectable} from '@nestjs/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';
import {FirebaseConfig} from '../../../../firebaseconfig';

@Injectable()
export class MonkeysService {
    dbHandler: any;
    dbPath: 'monkeys';
    firebaseApp: any;
    monkeys: any;

    constructor() {
        this.monkeys = [];
        this.firebaseApp = firebase.initializeApp(FirebaseConfig);
        this.dbHandler = firebase.database().ref(this.dbPath);
    }

    findAll(): Observable<any> {
        this.monkeys = [];
        this.dbHandler.on('child_added', item => this.monkeys.push(item.val()));
        return Observable.of(this.monkeys);
    }

    add(monkey: any): Observable<any> {
        return Observable.of(
            this.dbHandler.push(monkey).then(
                () => monkey,
                (err) => err)
        );
    }
}