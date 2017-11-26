import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mpajamas',
  template: `
    <h2>Pajamas for men</h2>

    <router-outlet></router-outlet>
  `
})
export class MPajamasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
