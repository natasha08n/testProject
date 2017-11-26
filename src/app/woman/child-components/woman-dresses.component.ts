import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wdresses',
  template: `
    <h2>Dresses for women</h2>

    <router-outlet></router-outlet>
  `
})
export class WDressesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
