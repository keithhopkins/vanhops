import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services/firebase.service';
import { Registry } from '../../models/Registry';

@Component({
  selector: 'app-root',
  templateUrl: './registry.component.html'
})
export class RegistryComponent implements OnInit {
  registry: Registry[];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.getRegistry();
  }

  getRegistry() {
    this.firebaseService.getRegistry().subscribe(
      registry => this.registry = registry
    )
  }
}
