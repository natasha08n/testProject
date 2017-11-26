import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msuits',
  template: `
    <h2>Suits for men</h2>

    <router-outlet></router-outlet>
  `
})
export class MSuitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
