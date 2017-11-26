import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wskirts',
  template: `
    <h2>Skirts for women</h2>

    <router-outlet></router-outlet>
  `
})
export class WSkirtsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
