import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wswimsuits',
  template: `
    <h2>Swimsuits for women</h2>

    <router-outlet></router-outlet>
  `
})
export class WSwimsuitsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
