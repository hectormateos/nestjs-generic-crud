import { Component } from '@nestjs/common';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import * as firebase from 'firebase';

@Component()
export class MonkeysService {
    firebaseApp: any;
    monkeys: any;
    config = {
        apiKey: 'AIzaSyD-ASOBSi_cDbaEPM1Hy2N7X97H4rBykug',
        databaseURL: 'https://nest-01-db.firebaseio.com',
        projectId: 'nest-01-db',
    };

    constructor() {
        this.firebaseApp = firebase.initializeApp(this.config);
        this.monkeys = [];
    }

    findAll(): Observable<any> {
        this.monkeys = [];
        const ref = firebase.database().ref('list');
        ref.on('child_added', item => this.monkeys.push(item.val()));
        return Observable.of(this.monkeys);
    }
}