import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Party } from '../models/Party';
import { Registry } from '../models/Registry';

@Injectable()
export class FirebaseService {
  bridesmaids: FirebaseListObservable<Party[]>;
  groomsmen: FirebaseListObservable<Party[]>;
  registry: FirebaseListObservable<Registry[]>;

  constructor(private af: AngularFire) { }

  getBridesmaids() {
    this.bridesmaids = this.af.database.list('/party/bridesmaids') as
    FirebaseListObservable<Party[]>
    return this.bridesmaids;
  }

  getGroomsmen() {
    this.groomsmen = this.af.database.list('/party/groomsmen') as
    FirebaseListObservable<Party[]>
    return this.groomsmen;
  }

  getRegistry() {
    this.registry = this.af.database.list('/registry') as
    FirebaseListObservable<Registry[]>
    return this.registry;
  }
}
