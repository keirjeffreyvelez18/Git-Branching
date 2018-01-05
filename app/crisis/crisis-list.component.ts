import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Crisis,
         CrisisService } from './crisis.service';

@Component({
  template: `
    <h3 highlight>Crisis List</h3>
    <div *ngFor='let crisis of crises | async'>
      <a routerLink="{{'../' + crisis.id}}">{{crisis.id}} - {{crisis.name}}</a>
    </div>
  `
})
export class CrisisListComponent {
  crises: Observable<Crisis[]>;

  constructor(private crisisService: CrisisService) {
    this.crises = this.crisisService.getCrises();
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/