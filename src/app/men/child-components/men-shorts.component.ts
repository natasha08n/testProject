import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mshorts',
  template: `
    <h2>Shorts for men</h2>

    <router-outlet></router-outlet>
  `
})
export class MShortsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
