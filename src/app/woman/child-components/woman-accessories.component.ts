import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waccessories',
  template: `
    <h2>Accessories for women</h2>

    <router-outlet></router-outlet>
  `
})
export class WAccessoriesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
