import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { Party } from '../models/Party';

@Injectable()
export class FirebaseService {
  bridesmaids: FirebaseListObservable<Party[]>;
  groomsmen: FirebaseListObservable<Party[]>;

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
}
