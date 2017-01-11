import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { Party } from '../../models/Party';

@Component({
  selector: 'app-root',
  templateUrl: './about.component.html',
  styleUrls: ['../../styles/shared.css']
})
export class AboutComponent implements OnInit {
  bridesmaids: Party[];
  groomsmen: Party[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getBridesmaids();
    this.getGroomsmen();
  }

  getBridesmaids() {
    this.firebaseService.getBridesmaids().subscribe(
      bridesmaids => this.bridesmaids = bridesmaids
    )
  }

  getGroomsmen() {
    this.firebaseService.getGroomsmen().subscribe(
      groomsmen => this.groomsmen = groomsmen
    )
  }
}
